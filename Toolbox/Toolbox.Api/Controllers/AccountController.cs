using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Toolbox.Data.Models;
using Toolbox.Data.RequestModels;
using Toolbox.Services.Interfaces;

namespace Toolbox.Api.Controllers
{
    public class AccountController : Controller
    {
        private UserManager<User> _userManager;
        private readonly IAccountService _accountService;
        
        public AccountController(UserManager<User> userManager, IAccountService accountService)
        {
            _userManager = userManager;
            _accountService = accountService;
        }
        
        [AllowAnonymous]
        [HttpPost("api/account/login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel model)
        {
            if(ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    var authClaims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Email, user.Email),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                    };
                    var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("7S79jvOkEdwoRqHx")); //TODO: Make this a secret And change issuer and audience to target domain
                    var token = new JwtSecurityToken(
                        issuer: "https://localhost:44341",
                        audience: "https://localhost:44341",
                        expires: DateTime.Now.AddMinutes(120),
                        claims: authClaims,
                        signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                        
                    );
                    
                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo
                    });
                }
                return Unauthorized();
            }

            return BadRequest(ModelState);
        }
        
        [AllowAnonymous]
        [HttpPost("api/account/register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestModel register)
        {
            if (ModelState.IsValid)
            {
                if (!await _accountService.IsEmailAvailable(register.Email))
                {
                    ModelState.AddModelError("email", "Email already in use");
                    return BadRequest(ModelState);
                }
                
                var newUser = new User()
                {
                    Email = register.Email,
                    UserName = register.Email, 
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now,
                };
                
                await _userManager.CreateAsync(newUser, register.Password);
                
                return Ok($"user {register.Email} created");
            }

            return BadRequest(ModelState);
        }

        [HttpGet("api/account/getUserId/{email}")]
        public IActionResult GetUserId(string email)
        {
            var user = _userManager.FindByEmailAsync(email);
            return Ok(user.Result.Id);
        }
    }
}
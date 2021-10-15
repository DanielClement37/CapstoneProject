using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Toolbox.Api.Controllers
{
    public class AccountController : Controller
    {
        
        public AccountController()
        {
        }
        
        [AllowAnonymous]
        [HttpPost("api/account/login")]
        public async Task<IActionResult> Login()
        {
            return Ok();
        }
        
        [AllowAnonymous]
        [HttpPost("api/account/register")]
        public async Task<IActionResult> Register()
        {
            return Ok();
        }

        [HttpGet("api/account/getUserId/{email}")]
        public IActionResult GetUserId(string email)
        {
            return Ok();
        }
    }
}
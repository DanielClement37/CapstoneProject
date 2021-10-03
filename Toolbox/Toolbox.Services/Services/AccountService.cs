using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Toolbox.Data;
using Toolbox.Data.Models;
using Toolbox.Services.Interfaces;

namespace Toolbox.Services.Services
{
    public class AccountService : IAccountService
    {
        private readonly ToolBoxDBContext _db;
        private UserManager<User> _userManager;

        public AccountService(ToolBoxDBContext db, UserManager<User> userManager)
        {
            _db = db;
            _userManager = userManager;
        }
        public async Task<string> UserIdFromJwtAsync(string jwtStream)
        { 
            var email = GetEmailFromJwt(jwtStream);
            var user = await _userManager.FindByEmailAsync(email);
           
            return user.Id;
        }

        public async Task<bool> IsEmailAvailable(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            return user == null;
        }

        public async Task<bool> IsUserNameAvailable(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            return user == null;
        }

        private string GetEmailFromJwt(string jwtStream)
        {
            var handler = new JwtSecurityTokenHandler();
            var tokens = handler.ReadJwtToken(jwtStream) ;
            
            return tokens.Claims.First(claim => claim.Type == "email").Value;

        }
    }
}
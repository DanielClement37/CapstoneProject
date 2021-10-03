using System.Threading.Tasks;

namespace Toolbox.Services.Interfaces
{
    public interface IAccountService
    {
        public Task<string> UserIdFromJwtAsync(string email);
        public Task<bool> IsEmailAvailable(string email);
        public Task<bool> IsUserNameAvailable(string userName);
    }
}
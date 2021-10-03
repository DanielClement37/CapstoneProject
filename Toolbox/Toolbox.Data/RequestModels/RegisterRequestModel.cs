using System.ComponentModel.DataAnnotations;

namespace Toolbox.Data.RequestModels
{
    public class RegisterRequestModel
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [MinLength(5)]
        public string Password { get; set; }
    }
}
using System;
using Microsoft.AspNetCore.Identity;

namespace Toolbox.Data.Models
{
    public class User : IdentityUser
    {
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
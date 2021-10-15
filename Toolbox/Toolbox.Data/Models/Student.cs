using System;
using Toolbox.Data.Enums;

namespace Toolbox.Data.Models
{
    public class Student
    {
        public Guid StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public bool IsPresent { get; set; }
    }
}
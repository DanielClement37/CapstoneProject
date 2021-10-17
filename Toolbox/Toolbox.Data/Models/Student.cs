using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Toolbox.Data.Enums;

namespace Toolbox.Data.Models
{
    public class Student
    {
        [Key]
        public Guid StudentId { get; set; }
        public Guid ClassroomId { get; set; }
        
        [Required(ErrorMessage = "Needs a first name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Needs a first name")]
        public string LastName { get; set; }
        
        public Gender Gender { get; set; }
        public bool IsPresent { get; set; }
        [ForeignKey("ClassroomId")]
        public Classroom Classroom { get; set; }
    }
}
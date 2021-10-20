using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Toolbox.Data.Models
{
    public class Classroom
    {
        [Key]
        public Guid ClassId { get; set; }
        public string ClassName { get; set; }
        public string TeacherId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public List<Student> Students { get; set; }
    }
}
using System;
using System.Collections.Generic;

namespace Toolbox.Data.Models
{
    public class Class
    {
        public Guid ClassId { get; set; }
        public string TeacherId { get; set; }
        public List<Student> Students { get; set; }
    }
}
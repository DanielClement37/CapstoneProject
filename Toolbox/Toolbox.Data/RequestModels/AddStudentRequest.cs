using System;
using Toolbox.Data.Enums;

namespace Toolbox.Data.RequestModels
{
    public class AddStudentRequest
    {
        public Guid ClassroomId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender? Gender { get; set; }
    }
}
using System;
using Toolbox.Data.Enums;

namespace Toolbox.Data.RequestModels
{
    public class EditStudentRequest
    {
       public string FirstName { get; set; }
       public string LastName { get; set; }
       public Gender? Gender { get; set; }
       
    }
}
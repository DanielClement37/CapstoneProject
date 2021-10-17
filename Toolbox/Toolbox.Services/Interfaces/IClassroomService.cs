using System.Collections.Generic;
using System.Threading.Tasks;
using Toolbox.Data.Models;

namespace Toolbox.Services.Interfaces
{
    public interface IClassroomService
    {
        public Task AddClassAsync(Classroom classroom);
        public Task AddStudentToClassAsync(Student student);
        public Task<Student> PickRandomStudentAsync();
        public Task<List<List<Student>>> GroupStudentsAsync (GroupStudentsOptions options);
    }
}
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Toolbox.Data.Models;

namespace Toolbox.Services.Interfaces
{
    public interface IClassroomService
    {
        public Task AddClassAsync(Classroom classroom);
        public Task<List<Classroom>> GetTeachersClassesAsync(string teacherId);
        public Task<Classroom> GetClassroom(Guid classroomId);
        public Task EditClass(Classroom classroom);
        public Task DeleteClassAsync(Guid classroomId);
        public Task AddStudentToClassAsync(Student student);
        public Task EditStudentAsync(Student student);
        public Task<List<Student>> GetClassroomStudents(Guid classroomId);
        public Task<Student> GetStudentAsync(Guid studentId);
        public Task DeleteStudentAsync(Guid studentId);
        public Task<Student> PickRandomStudentAsync();
        public Task<List<List<Student>>> GroupStudentsAsync (GroupStudentsOptions options);
    }
}
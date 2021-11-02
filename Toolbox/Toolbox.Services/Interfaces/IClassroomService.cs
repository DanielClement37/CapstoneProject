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
        public Task EditClass(Classroom classroom, Guid classroomId);
        public Task DeleteClassAsync(Guid classroomId);
        public Task AddStudentAsync(Student student);
        public Task EditStudentAsync(Student student, Guid StudentId);
        public Task<List<Student>> GetClassroomStudents(Guid classroomId);
        public Task<Student> GetStudentAsync(Guid studentId);
        public Task DeleteStudentAsync(Guid studentId);
        public Task<Student> GetRandomStudentAsync(Guid classroomId);
        public Task<List<List<Student>>> GroupStudentsAsync (GroupStudentsOptions options, Guid classroomId);
    }
}
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Toolbox.Data.Models;
using Toolbox.Services.Interfaces;

namespace Toolbox.Services.Services
{
    public class ClassroomService : IClassroomService
    {
        public Task AddClassAsync(Classroom classroom)
        {
            throw new NotImplementedException();
        }

        public Task<List<Classroom>> GetTeachersClassesAsync(string teacherId)
        {
            throw new NotImplementedException();
        }

        public Task<Classroom> GetClassroom(Guid classroomId)
        {
            throw new NotImplementedException();
        }

        public Task EditClass(Classroom classroom)
        {
            throw new NotImplementedException();
        }

        public Task DeleteClassAsync(Guid classroomId)
        {
            throw new NotImplementedException();
        }

        public Task AddStudentToClassAsync(Student student)
        {
            throw new NotImplementedException();
        }

        public Task EditStudentAsync(Student student)
        {
            throw new NotImplementedException();
        }

        public Task<List<Student>> GetClassroomStudents(Guid classroomId)
        {
            throw new NotImplementedException();
        }

        public Task<Student> GetStudentAsync(Guid studentId)
        {
            throw new NotImplementedException();
        }

        public Task DeleteStudentAsync(Guid studentId)
        {
            throw new NotImplementedException();
        }

        public Task<Student> PickRandomStudentAsync()
        {
            throw new NotImplementedException();
        }

        public Task<List<List<Student>>> GroupStudentsAsync(GroupStudentsOptions options)
        {
            throw new NotImplementedException();
        }
    }
}
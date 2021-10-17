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
            throw new System.NotImplementedException();
        }

        public Task<List<Classroom>> GetTeachersClassesAsync(string teacherId)
        {
            throw new System.NotImplementedException();
        }

        public Task DeleteClassAsync(Guid classroomId)
        {
            throw new NotImplementedException();
        }

        public Task AddStudentToClassAsync(Student student)
        {
            throw new System.NotImplementedException();
        }

        public Task<Student> PickRandomStudentAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<List<List<Student>>> GroupStudentsAsync(GroupStudentsOptions options)
        {
            throw new System.NotImplementedException();
        }
    }
}
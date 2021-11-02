using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Toolbox.Data;
using Toolbox.Data.Models;
using Toolbox.Services.Interfaces;

namespace Toolbox.Services.Services
{
    public class ClassroomService : IClassroomService
    {
        private readonly ToolBoxDbContext _db;

        public ClassroomService(ToolBoxDbContext db)
        {
            _db = db;
        }
        
        public async Task AddClassAsync(Classroom classroom)
        {
           await  _db.Classrooms.AddAsync(classroom);
           await _db.SaveChangesAsync();
        }

        public async Task<List<Classroom>> GetTeachersClassesAsync(string teacherId)
        {
            return await _db.Classrooms.Where(c => c.TeacherId == teacherId).ToListAsync();
            
        }

        public async Task<Classroom> GetClassroom(Guid classroomId)
        {
            return await _db.Classrooms.FirstOrDefaultAsync(c => c.ClassId == classroomId);
        }

        public async Task EditClass(Classroom classroom, Guid classroomId)
        {
            var currClassroom = await _db.Classrooms.FindAsync(classroomId);
            currClassroom.ClassName = classroom.ClassName;
            _db.Classrooms.Update(currClassroom);
            await _db.SaveChangesAsync();
        }

        public async Task DeleteClassAsync(Guid classroomId)
        {
            var classroom = await _db.Classrooms.FindAsync(classroomId);
            _db.Classrooms.Remove(classroom);
            await _db.SaveChangesAsync();
        }

        public async Task AddStudentAsync(Student student)
        {
           await _db.Students.AddAsync(student);
           await _db.SaveChangesAsync();
        }

        public async Task EditStudentAsync(Student student, Guid studentId)
        {
            var currStudent = await _db.Students.FindAsync(studentId);

            currStudent.FirstName = student.FirstName;
            currStudent.LastName = student.LastName;
            currStudent.Gender = student.Gender;

            _db.Students.Update(currStudent);

            await _db.SaveChangesAsync();
        }

        public async Task<List<Student>> GetClassroomStudents(Guid classroomId)
        {
            return await _db.Students.Where(s => s.ClassroomId == classroomId).ToListAsync();
        }

        public async Task<Student> GetStudentAsync(Guid studentId)
        {
            return await _db.Students.FindAsync(studentId);
        }

        public async Task DeleteStudentAsync(Guid studentId)
        {
            var student = await _db.Students.FindAsync(studentId);
            _db.Students.Remove(student);
            await _db.SaveChangesAsync();
        }

        public Task<Student> GetRandomStudentAsync(Guid classroomId)
        {
            throw new NotImplementedException();
        }

        public Task<List<List<Student>>> GroupStudentsAsync(GroupStudentsOptions options, Guid classroomId)
        {
            throw new NotImplementedException();
        }
    }
}
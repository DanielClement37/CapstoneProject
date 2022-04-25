/* Back up file to upload tables in case of emergencies */
CREATE TABLE IF NOT EXISTS "Classrooms" (
    "ClassId" UUID,
    "ClassName" VARCHAR(255),
    "TeacherId" VARCHAR(255),
    "CreatedAt" TIMESTAMP without time zone NOT NULL DEFAULT NOW(),
    "UpdatedAt" TIMESTAMP without time zone NOT NULL DEFAULT NOW(),
    INDEX "PK_Classrooms" PRIMARY KEY, btree ("ClassId") 
);
CREATE TABLE IF NOT EXISTS "Students" (
    "StudentId" UUID,
    "FirstName" VARCHAR(255),
    "LastName" VARCHAR(255),
    "Gender" INTEGER,
    "ClassroomId" UUID NOT NULL,
    "IsPresent" BOOLEAN NOT NULL,
    "CreatedAt" TIMESTAMP without time zone NOT NULL DEFAULT NOW(),
    "UpdatedAt" TIMESTAMP without time zone NOT NULL DEFAULT NOW(),
    INDEX "PK_Students" PRIMARY KEY, btree ("StudentId"),
    INDEX "IX_Students_ClassroomId" btree ("ClassroomId"),
    CONSTRAINT "FK_Students_Classrooms_ClassroomId" FOREIGN KEY ("ClassroomId") REFERENCES "Classrooms"("ClassId") ON DELETE CASCADE
);
\c postgres;
CREATE TABLE IF NOT EXISTS "Classrooms" (
    "ClassId" UUID PRIMARY KEY,
    "ClassName" VARCHAR(255) NOT NULL,
    "TeacherId" VARCHAR(255) NOT NULL,
    "CreatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "UpdatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS "Students" (
    "StudentId" UUID PRIMARY KEY,
    "FirstName" VARCHAR(255) NOT NULL,
    "LastName" VARCHAR(255) NOT NULL,
    "Gender" INTEGER NOT NULL,
    "ClassroomId" UUID NOT NULL,
    "IsPresent" BOOLEAN NOT NULL,
    "CreatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "UpdatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_classrooms_class FOREIGN KEY ("ClassroomId") REFERENCES "Classrooms"("ClassId")
);
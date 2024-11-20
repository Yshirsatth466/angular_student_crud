#Student Management CRUD Application
A simple Student Management System built using Angular and JSON Server for CRUD operations.

Features
View Students: Display student details.
Add Student: Add new students.
Edit Student: Update existing student details.
Delete Student: Remove students from the list.
Technologies Used
Frontend: Angular
Backend: JSON Server (Mock API)
Setup Instructions
Install Dependencies:
bash
Copy code
npm install
Start JSON Server:
bash
Copy code
json-server --watch src/assets/db.json
Run Angular App:
bash
Copy code
ng serve
API Endpoints
GET /students: Fetch all students.
POST /students: Add a new student.
PUT /students/:id: Update a student.
DELETE /students/:id: Delete a student.
Example Data (db.json)
json
Copy code
{
  "students": [
    { "id": 1, "name": "John", "age": 20, "course": "CS" }
  ]
}
License
Licensed under MIT.







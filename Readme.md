##for post:
http://localhost:5000/api/students/add
{
"studentID": 101,
"name": "Alice",
"score": 95
}

for get all students:
get:
http://localhost:5000/api/students/all

for each student details
get:
http://localhost:5000/api/students/101

for put or update:
put:
http://localhost:5000/api/students/update/101
{
"name": "Alice Johnson",
"score": 98
}

to delete
delete:
http://localhost:5000/api/students/delete/101

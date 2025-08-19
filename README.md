----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Academic...Node JS Assignment-->
Task: Develop Node.js APIs for School Management
Objective: Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system should allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.
Requirements:
Database Setup:
Description: Create a schools table in MySQL with the following fields:
id (Primary Key)
name (VARCHAR)
address (VARCHAR)
latitude (FLOAT)
longitude (FLOAT)
API Development:
Add School API:
Endpoint: /addSchool
Method: POST
Payload: Includes name, address, latitude, and longitude.
Functionality: Validates the input data and adds a new school to the schools table.
Validation: Ensure all fields are properly validated before insertion (e.g., non-empty, correct data types).
List Schools API:
Endpoint: /listSchools
Method: GET
Parameters: User's latitude and longitude.
Functionality: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
Sorting Mechanism: Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.
Hosting and Testing:
Hosting: Deploy the APIs on a suitable hosting service.
Postman Collection:
Create a Postman collection for both APIs.
Include example requests and document expected responses.
Share the collection with stakeholders for testing purposes.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Technologies Used
- Node.js
- Express.js
- MySQL (using `mysql2` package)
- Body-Parser
- Nodemon (development)
- Postman (for API testing)
- 
#Install dependencies
-npm install
#server run
-npm run dev


postman
POST -http://localhost:3000/api/schools/addSchool
GET  -http://localhost:3000/api/schools/listSchools?lat=28.6139&lng=77.2090

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
======>


<img width="1366" height="768" alt="Screenshot (163)" src="https://github.com/user-attachments/assets/a9b9cd00-3829-429a-951f-2ab0a41518fe" />






<img width="1366" height="768" alt="Screenshot (164)" src="https://github.com/user-attachments/assets/07d90510-3cc0-4297-aa5f-b64b4ddcde48" />



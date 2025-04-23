# SIT737-2025-t1-prac4p
Node.js microservice built with Express for basic calculator operations (add, subtract, multiply, divide). Supports RESTful API endpoints with input validation and error handling. Created for SIT737 Cloud Native App Dev – Task 4.1P (T1 2025).

#Steps to Run Microservice:

1. Clone the Repository

git clone https://github.com/DanishKumar1001/SIT737-2025-t1-prac4p.git
cd SIT737-2025-t1-prac4p

2. Install Dependencies

Ensure you have Node.js installed. Then run:

npm install

3. Run the Application

node app.js

The service will run on http://localhost:3000.

#Available Endpoints

1. Addition

GET /add?num1=10&num2=5

2. Subtraction

GET /subtract?num1=10&num2=5
Returns error if num1 < num2.

3. Multiplication

GET /multiply?num1=10&num2=5

4. Division

GET /divide?num1=10&num2=5
Returns error if num2 == 0.

#Error Handling

Missing Parameters: Returns 400 Bad Request
Invalid Numbers: Returns 400 Bad Request
Subtraction Edge Case: num1 must be greater than num2
Division by Zero: Not allowed
Invalid Endpoint: Returns 404 Not Found

📊 Logging with Winston

Winston Logs Include:

1. All incoming requests
2. Success logs for each operation
3. Error logs for invalid operations and endpoints

Log Files:

1. logs/combined.log – all logs
2. logs/error.log – only errors

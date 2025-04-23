const express = require('express');
const app = express();
const port = 3000;

// Middleware to validate and parse input
function validateInput(req, res, next) {
    const { num1, num2 } = req.query;

    // Check if both parameters are provided
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Both num1 and num2 parameters are required' });
    }

    // Convert to numbers
    req.num1 = parseFloat(num1);
    req.num2 = parseFloat(num2);

    // Check if both inputs are valid numbers

    if (isNaN(req.num1) || isNaN(req.num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers' });
    }

    next();
}
// http://localhost:port/routename?num1=value&num2=value

app.get('/add', validateInput, (req, res) => {
    res.json({ result: req.num1 + req.num2 });
});

app.get('/subtract', validateInput, (req, res) => {
    if(req.num1 <= req.num2){
        return res.status(400).json({ error: 'First number should be greater than second number to negative value'})
    }
    res.json({ result: req.num1 - req.num2 });
});

app.get('/multiply', validateInput, (req, res) => {
    res.json({ result: req.num1 * req.num2 });
});

app.get('/divide', validateInput, (req, res) => {
    if (req.num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    res.json({ result: req.num1 / req.num2 });
});

// Catch-all for invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Invalid endpoint. Use /add, /subtract, /multiply, or /divide with num1 and num2 query parameters.' });
});

app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});

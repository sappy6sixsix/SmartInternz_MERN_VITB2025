// Q3: Set up an Express.js server running on port 5000
// Code - Saptarshi Das_22BCY10286
// Date - 15.03.2025

// Installing dependencies: npm install express cors body-parser

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}`));
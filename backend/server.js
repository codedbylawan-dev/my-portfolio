const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock DB (JSON file)
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Get Portfolio Data (Mocked as a route)
app.get('/api/portfolio', (req, res) => {
    // In a real app, this would come from a DB
    const portfolioData = {
        profile: {
            name: "Lawan Goud",
            title: "Junior Full Stack Developer",
            tagline: "Turning logic into reliable web applications.",
            brandStatement: "Self-taught developer with strong foundations in JavaScript, Python, and SQL. Focused on building clean, practical, and scalable applications through continuous learning and real-world projects.",
            location: "India",
            email: "lawan@example.com",
            github: "https://github.com/Lawangoud",
            linkedin: "https://linkedin.com/in/lawangoud"
        },
        // ... rest of the data would go here
    };
    res.json(portfolioData);
});

// Handle Contact Form Submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    };

    // Save to messages.json
    let messages = [];
    if (fs.existsSync(MESSAGES_FILE)) {
        messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
    }
    messages.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`New Message from ${name}: ${message}`);
    res.status(201).json({ message: 'Thank you for your message! I will get back to you soon.' });
});

app.get('/', (req, res) => {
    res.send('Portfolio Backend API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

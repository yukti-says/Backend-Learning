const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Express Server</h1>
        <form action="/submit" method="POST">
        <input type="text" name="name" placeholder="Enter your name" required>
        <input type="email" name="email" placeholder="Enter your email" required>
        <button type="submit">Submit</button>
        </form>
    `);
});
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`<h1>Thank you, ${name}!</h1><p>Your email is: ${email}</p>`);
    // res.send(`<h1>Hello, ${name}!</h1>`);
});
app.listen(3000);

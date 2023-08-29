const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  // Simulate user registration (no database connection)
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  return res.json({ message: 'Registration successful!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

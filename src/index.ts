import express from 'express';
import { LoginController } from './controllers/Auth/Login.controller';


const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  const a = new LoginController();
  a.login('sharan');
});

// Define a route with route parameters
app.get('/api/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
  });

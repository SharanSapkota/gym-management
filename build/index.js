"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Define a simple route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});
// Define a route with route parameters
app.get('/api/greet/:name', (req, res) => {
    const { name } = req.params;
    res.json({ message: `Hello, ${name}!` });
});
app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});

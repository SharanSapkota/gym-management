import express from 'express';
import config from './config/index.config';
import routes from './routes/index.route';
import {connectToMongo} from './db/db'

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
connectToMongo()

const { PORT } = config
// Define a simple route
app.use('/api', routes)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

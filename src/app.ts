import  express from 'express'; 
import { route } from './routes';
import { Database } from './database';

const db = Database.getInstance();
const app = express();
app.use(express.json())
app.use(route);

export { app }
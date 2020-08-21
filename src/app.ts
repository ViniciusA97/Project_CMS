import  express from 'express'; 
import { route } from './routes';
import { connect } from './database';

connect();
const app = express();
app.use(express.json())
app.use(route);
app.listen(3333);

export { app }
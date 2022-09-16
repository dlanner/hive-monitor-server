import express from 'express';
import {getRootHandler, postDataHandler, getMetricsHandler} from './handlers';
const app = express();
const port = 8080;
app.use(express.json());
app.get('/', getRootHandler);
app.post('/data', postDataHandler);
app.get('/metrics', getMetricsHandler);
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

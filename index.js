import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js' 

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

app.use('/posts', postRoutes);
// app.get('/', (req, res) => res.json(`Home Page`);
app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
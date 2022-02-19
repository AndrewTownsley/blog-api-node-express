import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import postRoutes from './routes/posts.js' 

const app = express();

app.use(bodyParser.json());

const PORT = 5000;
// const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;


app.use('/posts', postRoutes);

// const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;

// app.get('/', async (req, res) => {
//     const url = `https://api.hatchways.io/assessment/blog/posts?tag=tech`;
//     const response = await fetch(url);
//     const postData = response.json;
//     res.json(postData)
//     console.log(postData);

// })



app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
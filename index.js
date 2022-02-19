import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import postRoutes from './routes/posts.js' 

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

app.use('/posts', postRoutes);

// const url = `https://api.hatchways.io/assessment/blog/posts?tag=tech`;
// const response = await fetch(url);
// const postData = await response.json;
// console.log(postData);

// app.get('/posts', (req, res) => {
//     const newPosts = postData.map((post) => {
//         const { author, tag } = post;
//         return { author, tag };
//     })
//     res.json(newPosts);
// })

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
import express from 'express';
import fetch from 'node-fetch';
import { checkResStatus } from '../utils/checkResStatus.js';

const router = express.Router();


router.get('/', (req, res) => {

    const tag = req.query.tag;

    fetch(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)
    .then(checkResStatus)
    .then(res => res.json())
    .then(json => res.send(json.posts))
    .catch(err => console.log(err))
})

// router.get('/', async (req, res) => {
//     const options = {
//         'method': 'GET',
//     }
//     const response = await fetch(url)
//         .then(res => res.json())
//         .catch(err => console.log(err))
//             res.json(response)
// })

// router.get('/:tags', async (req, res) => {
//     const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;
//     console.log(req.query);
//     let tag = req.query.tag;
//     const options = {
//         'method': 'GET',

//     }
//     const response = await fetch(url)
//         .then(res => res.json())
//         .catch(err => console.log(err))
//     res.json(response)

// })

// router.get(`/:tags`, async (req, res) => {
//     let tag = req.params.tag;
//     const options = {
//         'method': 'GET',
//     }
//     const response = await fetch(url)
//         .then(res => res.json())
//         .catch(err => console.log(err))
//     console.log("Response:", response);
//     if(res.posts[tag]) {
//         res.json(response.posts)
//     } else {
//         res.json('no tag')
//     }

// })

export default router;
import express from 'express';
import fetch from 'node-fetch';
import { checkResStatus } from '../utils/checkResStatus.js';

const router = express.Router();
const url = `https://api.hatchways.io/assessment/blog/posts?tag=tech`;


// router.get('/', (req, res) => {
//     fetch(`https://api.hatchways.io/assessment/blog/posts?tag=tech`)
//     .then(checkResStatus)
//     .then(res => res.json())
//     .then(json => res.send(json.posts))
//     .catch(err => console.log(err))
// })

router.get('/', async (req, res) => {
    console.log(req.query);
    const options = {
        'method': 'GET',

    }
    const response = await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
    console.log("Response:", response);
    res.json(response)

})

// router.get('/:tag', async (req, res) => {
//     const url = '';
//     const options = {
//         'method': 'GET',

//     }
//     const response = await fetch(url)
//         .then(res => res.json())
//         .catch(err => console.log(err))
//     console.log("Response:", response);
//     res.json(response)

// })

export default router;
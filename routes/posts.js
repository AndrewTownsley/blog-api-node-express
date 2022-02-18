import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const checkResponseStatus = (res) => {
    if(res.ok) {
        return res
    } else {
        throw new Error(`The HTTP Status of the response: ${res.status} (${res.statusText})`)
    }
}

router.get('/', (req, res) => {
    fetch(`https://api.hatchways.io/assessment/blog/posts?tag=tech`)
    .then(checkResponseStatus)
    .then(res => res.json())
    .then(json => res.send(json.posts))
    .catch(err => console.log(err))
})

export default router;
import express from 'express';
import fetch from 'node-fetch';
import axios from 'axios';
import { checkResStatus } from '../utils/checkResStatus.js';

const router = express.Router();
// const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;

// This is the functional GET request.  Uncomment this to make it work.
// router.get('/', async (req, res) => {
//     const tag = req.query.tag;
//     fetch(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)
//         .then(checkResStatus)
//         .then(res => res.json())
//         .then(json => res.send(json.posts))
//         .catch(error => {
//             res.status(400).send({
//                 error: 'Tags parameter is required'
//             })
//             console.log(error);
//         })
 
// });

// router.get('/', (req, res) => {
//     const tag = req.query.tag;
//     console.log(req.query.tag)
//     const tagsList = tag.split(',')
//     console.log(tagsList);
    
//     tagsList.forEach((tag) => {
//         if(tagsList.length === 0) {
//             // fetch(url with single tag)
//             // fetch(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)
//             tag === 'tech' ? 
//             tag === 'history' ? 
//             tag === 'health' ? 
//             tag === 'tech' ? 

//         } else {
//             // fetch(url with multiple tags seperated by comma)
//             // fetch(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)

//         }
//     })

//     fetch(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)
//     .then(checkResStatus)
//     .then(res => res.json())
//     .then(json => res.send(json.posts))
//     .catch(error => {
//         res.status(400).send({
//             error: 'Tags parameter is required'
//         })
//         console.log(error);
//     })
// })

// router.get('/', (req, res) => {
//     const tag = req.query.tag;
//     const { sortBy, direction } = req.params;
//     const sortValues = ['id', 'author', 'authorId', 'likes', 'popularity', 'reads', 'tags', undefined];
//     const directionValues = ['asc', 'desc', undefined];

//     if(sortValues.indexOf(sortBy) == -1) {
//         res.status(404).send({
//             error: 'sortBy parameter is invalid.'
//         })
//     }
//     if(directionValues.indexOf(direction) === -1) {
//         res.status(404).send({
//             error: 'direction parameter is invalid.'
//         })
//     }


//     fetch(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`)
//     .then(checkResStatus)
//     .then(res => {
//         let json = res.json.posts;
//         if(sortBy) {
//             if(direction === 'desc') {
//                 // sort posts by descending order
//                 json = json.sort((a, b) => a.post > b.post ? 1 : -1)
//             } else {
//                 // sort posts by ascending order
//                 json = json.sort((a, b) => a.post < b.post ? 1 : -1)
//             }
//         }
//         // return success status and posts
//         res.status(200).send(json.posts) 
//     })
//     // catch error and error message
    
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

// router.get('/:tags', async (req, res) => {
//     const tagsArray = []
//     decodeURIComponent.query.toString();
//     if (tagsArray.length) {
//         const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tagsList}`;
//         console.log(req.query);
//         let tag = req.query.tag;
//         const options = {
//             'method': 'GET',
    
//         }
//         const response = await fetch(url)
//             .then(res => res.json())
//             .catch(err => console.log(err))
//         res.json(response)
//     } else {
//         const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;
//             console.log(req.query);
//             let tag = req.query.tag;
//             const options = {
//                 'method': 'GET',
        
//             }
//             const response = await fetch(url)
//                 .then(res => res.json())
//                 .catch(err => console.log(err))
//             res.json(response)
//     }


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
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

const checkResponseStatus = (res) => {
    if(res.ok) {
        return res
    } else {
        throw new Error(`The HTTP Status of the response: ${res.status} (${res.statusText})`)
    }
}


app.get('/', (req, res) => {
    fetch(`https://api.hatchways.io/assessment/blog/posts?tag=tech`)
        .then(checkResponseStatus)
        .then(res => res.json())
        .then(json => res.send(json.posts[0]))
        .catch(err => console.log(err))
});
// app.get('/', (req, res) => res.json(`Home Page`);
app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
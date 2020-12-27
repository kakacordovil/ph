import express, { response } from 'express';
import { getRepository } from 'typeorm';
import Post from './models/Post';

import './database/connection';

const app = express();

app.use(express.json());

//app.post('/users/:id', (request, response) => {
  //  console.log(request.query);
    //console.log(request.params);
    //console.log(request.body);

//    return response.json({message: 'who run the world?'})
//});

app.post('/posts', (request, response) => {
    const {
        content
    } = request.body;

    return response.json({ text: 'post'});
});

const postsRepository = getRepository(Post);

app.listen(3333);

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

app.post('/posts', async (request, response) => {
    const {
        content
    } = request.body;

    const postsRepository = getRepository(Post);

    const post = postsRepository.create({
        content
    });

    await postsRepository.save(post);

    return response.json({ text: 'post'});
});



app.listen(3333);

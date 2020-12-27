import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import postView from '../views/PostsViews';
import * as Yup from 'yup';

import Post from '../models/Post';

export default {
  async index(request: Request, response: Response){
    const postsRepository = getRepository(Post);

    const posts = await postsRepository.find();

    return  response.json(postView.renderMany(posts));
  },

  async show(request: Request, response: Response){
    const { id } = request.params;

    const postsRepository = getRepository(Post);

    const post = await postsRepository.findOneOrFail(id);

    return  response.json(postView.render(post));
  },

  async create(request: Request, response: Response) {
    const {
      content
  } = request.body;

  const postsRepository = getRepository(Post);

  const data = {
    content
  };

  const schema = Yup.object().shape({
    content: Yup.string().required()
  });

  await schema.validate(data, {
    abortEarly: false,
  });

  const post = postsRepository.create(data);

  await postsRepository.save(post);

  return response.status(201).json({ text: 'post'});
  }
};
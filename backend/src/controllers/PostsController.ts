import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Post from '../models/Post';

export default {
  async index(request: Request, response: Response){
    const postsRepository = getRepository(Post);

    const posts = await postsRepository.find();

    return  response.json(posts);
  },

  async create(request: Request, response: Response) {
    const {
      content
  } = request.body;

  const postsRepository = getRepository(Post);

  const post = postsRepository.create({
      content
  });

  await postsRepository.save(post);

  return response.status(201).json({ text: 'post'});
  }
};
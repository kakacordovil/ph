import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import profileView from '../views/ProfileViews';
import * as Yup from 'yup';

import Profile from '../models/Profile';

export default {
  async index(request: Request, response: Response){
    const profilesRepository = getRepository(Profile);

    const profile = await profilesRepository.find();

    return  response.json(profileView.renderMany(profile));
  },

  async show(request: Request, response: Response){
    const { id } = request.params;

    const profilesRepository = getRepository(Profile);

    const profile = await profilesRepository.findOneOrFail(id);

    return  response.json(profileView.render(profile));
  },

  async create(request: Request, response: Response) {
    const {
      username
  } = request.body;

  const profilesRepository = getRepository(Profile);

  const data = {
    username
  };

  const schema = Yup.object().shape({
    username: Yup.string().required()
  });

  await schema.validate(data, {
    abortEarly: false,
  });

  const profile = profilesRepository.create(data);

  await profilesRepository.save(profile);

  return response.status(201).json({ text: 'profile'});
  }
};
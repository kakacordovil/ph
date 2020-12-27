import { Router } from 'express';
import PostsController from './controllers/PostsController';



const routes = Router();

routes.get('/posts', PostsController.index);
routes.post('/posts', PostsController.create);

export default routes;
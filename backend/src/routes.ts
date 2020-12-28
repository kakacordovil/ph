import { Router } from 'express';
import PostsController from './controllers/PostsController';



const routes = Router();

routes.get('/posts', PostsController.index);
routes.get('/posts/:id', PostsController.show);
routes.post('/postcreate', PostsController.create);

export default routes;
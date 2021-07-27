import { Router } from 'express';
import controller from './controllers/room';

const routes = Router();

routes.get('/rooms/search', controller.search);

export default routes;
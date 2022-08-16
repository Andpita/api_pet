import { Router } from 'express';

import photo from '../controllers/Photo';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photo.store);

export default router;

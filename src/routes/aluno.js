import { Router } from 'express';
import aluno from '../controllers/Aluno';

// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', aluno.index);
router.get('/:id', aluno.show);
router.post('/', aluno.store);
router.put('/:id', aluno.update);
router.delete('/:id', aluno.delete);

export default router;

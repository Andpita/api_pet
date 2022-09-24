import { Router } from 'express';
import user from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Rotas apenas demonstrativas:
router.get('/', user.index); //< Mostra todos usuários
// router.get('/:id', user.show); //< Mostra apenas um usuaŕio logado, não um especfico

router.post('/:id', user.store);
router.put('/:id', loginRequired, user.update);
router.delete('/:id', loginRequired, user.delete);

export default router;

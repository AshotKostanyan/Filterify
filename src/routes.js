import express from 'express'
import * as handler from './controllers/index.js'
const router = express.Router();

router.post('/login', handler.AuthorizationController.login);
router.post('/register', handler.AuthorizationController.register);
router.get('/home', handler.HomeController.home)

export default router;
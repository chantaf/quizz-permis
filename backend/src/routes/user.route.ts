import express from 'express';
import { createUser,getUsers } from '@controllers/user.controller';

const router = express.Router();

router.post('/create', createUser);
router.get('/users', getUsers);

export { router };

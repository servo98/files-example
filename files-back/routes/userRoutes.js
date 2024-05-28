import { Router } from 'express';
import { createUser, upload } from '../controllers/userController.js';

const userRouter = Router();

userRouter.post('/', upload.single('avatar'), createUser);

export default userRouter;

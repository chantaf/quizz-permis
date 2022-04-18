import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { User } from '@models/User';

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create(body);
  res.status(201).json({
    user,
  });
});
export const getUsers = catchAsync(async (req: Request, res: Response) => {
    const users = await User.find();
  
    res.status(200).json({
      users,
    });
  });
  






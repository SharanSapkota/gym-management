import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const userSchema = z.object({
  username: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(1).max(255),
  dateOfBirth: z.date().optional(),
  gender: z.enum(['Male', 'Female', 'Other']).optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  membershipType: z.string().optional(),
  membershipStartDate: z.date().optional(),
  membershipEndDate: z.date().optional(),
  role: z.string().uuid(), 
  isActiveMember: z.boolean().optional(),
  isUser: z.boolean().optional(),
});

function validateUser(req: Request, res: Response, next: NextFunction) {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export { validateUser };

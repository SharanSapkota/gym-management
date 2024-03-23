import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import httpResponse from '../helper/httpResponse';


const userSchema = z.object({
  username: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(1).max(255),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['Male', 'Female', 'Other']).optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  membershipType: z.string().optional(),
  membershipStartDate: z.string().optional(),
  membershipEndDate: z.string().optional(),
  role: z.string().optional(), 
  isActiveMember: z.boolean().optional(),
  isUser: z.boolean().optional(),
});

function validateUserSignup(req: Request, res: Response, next: NextFunction) {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error) {
    const errorFormat = {
        message: fromZodError(error).toString()
      }
      
      httpResponse.errorHandler(res, errorFormat)  }
}

export { validateUserSignup };


import bcrypt from 'bcrypt';

export const passwordMatch = async (userPassword: string, providedPassword: string) => {
    const isPasswordMatched = await bcrypt.compare(userPassword, providedPassword);
    return isPasswordMatched;
}

export const hashPassword = async (password: string) => {
    const hashedPassword =  await bcrypt.hash(password, 10);
    return hashedPassword;
}


import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const DB_NAME = process.env.DB_NAME;
export const DB_URL = `${process.env.DB_URL}${DB_NAME}`;
export const JWT_SECRET = process.env.JWT_SECRET;
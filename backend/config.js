import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT;
export const DB_NAME = process.env.DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;
export const DB_URL = (NODE_ENV === 'development') ? `${process.env.DB_URL}${DB_NAME}` : `${process.env.DB_URL_PD}`;
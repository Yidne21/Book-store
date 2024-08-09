import dotenv from "dotenv";

dotenv.config();

const value = process.env;

export const nodeEnv = value.NODE_ENV;
export const port = value.PORT;
export const db_user = value.DB_USER;
export const db_password = value.DB_PASS;
export const db_host = value.DB_HOST;
export const db_port = value.DB_PORT;
export const db_name = value.DB_NAME;
export const jwt_secret = value.JWT_SECRET;
export const cloudApiKey = value.CLOUD_API_KEY;
export const cloudApiSecret = value.CLOUD_API_SECRET;
export const cloudName = value.CLOUD_NAME;

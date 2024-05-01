import "dotenv/config"

export const PORT = process.env.PORT || 4000
export const DB_DATABASE = process.env.DB_DATABASE || mydb
export const DB_USERNAME = process.env.DB_USERNAME || root
export const DB_PASSWORD = process.env.DB_PASSWORD || secret
export const DB_HOST = process.env.DB_HOST || localhost
export const DB_PORT = process.env.DB_PORT || 3306
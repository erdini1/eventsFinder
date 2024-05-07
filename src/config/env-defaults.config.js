import "dotenv/config"

// BACKEND
export const BACKEND = {
	PORT: process.env.PORT || 4000,
	URL: process.env.BACKEND_URL || "http://localhost"
}

// DATABASE
export const DB = {
	DATABASE: process.env.DB_DATABASE || "mydb",
	USERNAME: process.env.DB_USERNAME || "root",
	PASSWORD: process.env.DB_PASSWORD || "secret",
	HOST: process.env.DB_HOST || "localhost",
	PORT: process.env.DB_PORT || "3306"
}

// MAILTRAP
export const EMAIL = {
	USERNAME: process.env.EMAIL_USERNAME || "myemailusername",
	PASSWORD: process.env.EMAIL_PASSWORD || "myemailpassword",
	HOST: process.env.EMAIL_HOST || "myemailhost",
	PORT: process.env.EMAIL_PORT || "myemailport"
}
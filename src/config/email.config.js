import nodemailer from "nodemailer"
import { EMAIL } from "./env-defaults.config.js";

const transport = nodemailer.createTransport({
	host: EMAIL.HOST,
	port: EMAIL.PORT,
	auth: {
		user: EMAIL.USERNAME,
		pass: EMAIL.PASSWORD
	}
});

export default transport
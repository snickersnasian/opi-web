import express from "express";
import { config } from "dotenv";

import { scheduleRoutes } from "./routes/schedule/schedule.routes.js";
import { authRoutes } from "./routes/auth/auth.routes.js";
import bodyParser from "body-parser";

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/schedule", scheduleRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
	res.json({
		app: "opi_ap",
	});
});

try {
	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
} catch (error) {
	console.log(error);
}

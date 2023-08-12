import express from 'express';
import { config } from 'dotenv';

import { scheduleRoutes } from './routes/schedule/schedule.routes.js';
import { authRoutes } from './routes/auth/auth.routes.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/schedule', scheduleRoutes);
app.use('/api/auth', authRoutes);
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

try {
	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
} catch (error) {
	console.log(error);
}

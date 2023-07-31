import express from "express";
import { config } from "dotenv";

config();

import { scheduleRoutes } from "./routes/schedule.routes.js";
import { authRoutes } from "./routes/auth.routes.js";

const PORT = process.env.PORT || 3000;

const app = express();

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

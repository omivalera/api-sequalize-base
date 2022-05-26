import express from "express";
import morgan from "morgan";

const app = express();


import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
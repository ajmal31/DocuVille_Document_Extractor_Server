import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { PORT } from "./config/constants.js";
import routes from "./routes/routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Apply middleware for security headers
app.use(helmet());

// Logger
app.use(morgan("dev"))

// CORS configuration for specific origins
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
];
app.use(cors({ origin: allowedOrigins }));

// JSON parsing and URL encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registering routes
app.use("/api/v1", routes(express));

// Global error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.info(`
    -----------------------------
      Server Listening on port ${PORT}
      Allowed Origins: ${allowedOrigins.join(", ")}
    -----------------------------
    `);
});

export default app;

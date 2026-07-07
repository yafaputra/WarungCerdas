import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import landingPageRoutes from "./routes/landingPageRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  "http://localhost:3000",
  "https://warung-cerda.me",
  process.env.FRONTEND_URL
].filter(Boolean) as string[];

app.use(cors({
  origin: allowedOrigins.length > 0 ? allowedOrigins : "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Routes
app.use("/api", landingPageRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`[Server] Express CMS Server running on http://localhost:${PORT}`);
});

export default app;

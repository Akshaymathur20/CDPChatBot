import express from "express";
import { getChatbotResponse } from "../controllers/chatbotControllers.js";

const router = express.Router();
router.post("/ask", getChatbotResponse);

export default router;

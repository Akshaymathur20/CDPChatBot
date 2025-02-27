import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatbotRoutes from './src/routes/chatbotRoutes.js'; // ✅ Ensure .js is included
import { EventEmitter } from 'events';

EventEmitter.defaultMaxListeners = 20;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use chatbot routes
app.use("/api/chatbot", chatbotRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

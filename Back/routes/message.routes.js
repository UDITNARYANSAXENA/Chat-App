import express from "express";
import { getmessage, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getmessage
);

router.post("/send/:id", protectRoute, sendMessage);

export default router;
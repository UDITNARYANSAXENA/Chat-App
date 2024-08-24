import express from "express";
import { loginuser, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup );

router.post("/login",  loginuser);

router.post("/logout", logout);

export default router;
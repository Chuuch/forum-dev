import { Router } from "express";
import { registerUser } from "../services/auth.service";
import { login, register } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;

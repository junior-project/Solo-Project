import express from 'express';
import {getAllUser,signup,login} from "../controllers/user-controllers.js"

const router = express.Router();

router.get("/" , getAllUser);

router.post("/signup",signup) //localhost:3002/signup
router.post("/login",login)//localhost:3002/login
export default router ;
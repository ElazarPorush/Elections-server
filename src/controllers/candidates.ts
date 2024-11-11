import { Router } from "express";
import { getCandidates, sid } from "../routes/candidates";
import verifyUser from "../middlewares/verifyUser";

const router = Router()

router.post("/sid", sid)

router.get("/", verifyUser, getCandidates)

export default router
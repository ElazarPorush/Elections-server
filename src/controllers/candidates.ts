import { Router } from "express";
import { getCandidate, sid } from "../routes/candidates";

const router = Router()

router.post("/sid", sid)

router.get("/", getCandidate)

export default router
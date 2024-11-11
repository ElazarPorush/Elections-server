import { Request, Response } from "express";
import { getCandidateList, initDataBase } from "../services/candidates";

export const sid = async (req: Request, res: Response) => {
    try {
        await initDataBase()
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export const getCandidates = async (req: Request, res: Response) => {
    try {
        const list = await getCandidateList()
        res.status(200).json(list)
    } catch (err) {
        res.status(400).json(err as Error)
    }
}
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

export const getCandidate = async (req: Request, res: Response) => {
    try {
        const list = await getCandidateList()
        res.send({
            data: list,
            success: true
        })
    } catch (err) {
        res.send({
            data: null,
            success: false,
            error: err
        })
    }
}
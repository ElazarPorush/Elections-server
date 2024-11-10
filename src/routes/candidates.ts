import { Request, Response } from "express";
import { initDataBase } from "../services/candidate";

export const sid = async (req: Request, res: Response) => {
    try {
        await initDataBase()
    } catch (err) {
        console.log(err)
    }
}
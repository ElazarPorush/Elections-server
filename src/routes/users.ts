import { Request, Response } from "express"
import { initDataBase, addUser, userLogin } from "../services/users"

export const sid = async (req: Request, res: Response) => {
    try {
        await initDataBase()
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        await userLogin(req.body)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }   
}

export const register = async (req: Request, res: Response) => {
    try {
        const newUser = await addUser(req.body)
        res.send({
            data: newUser,
            error: false
        })
    } catch (err) {
        console.log(err)
        res.send({
            data: null,
            error: err
        })
    }   
}
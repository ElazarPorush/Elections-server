import { hash } from "bcrypt";
import User, { IUser } from "../models/user";

export const initDataBase = async () => {
    try {
        const users = [
            {
                username: "eli",
                password: "135790"
            },
            {
                username: "eli434",
                password: "342"
            },
            {
                username: "eliahu",
                password: "135790"
            },
        ]
    for (const user of users){
        const newUser = new User(user)
        await newUser.save()
    }
    } catch (err) {
        console.log("Error accured while creating initial state of users", err)
    }
}

export const addUser = async (user: IUser) => {
    try {
        const encPass = await hash(user.password, 10)
        user.password = encPass
        const newUser = new User(user)
        return await newUser.save()
    } catch (err) {
        throw new Error(`Error accured while creating this user: ${err}`)
    }
}

export const userLogin = async (user: IUser) => {
    try {
        
    } catch (err) {
        
    }
}
import { compare, hash } from "bcrypt";
import User, { IUser } from "../models/user";
import { LoginDto, RegisterDto } from "../types/DTO/user";
import jwt from "jsonwebtoken";

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

export const addUser = async (user: RegisterDto) => {
    try {
        const encPass = await hash(user.password, 10)
        user.password = encPass
        const newUser = new User(user)
        return await newUser.save()
    } catch (err) {
        throw new Error(`Error accured while creating this user: ${err}`)
    }
}

export const userLogin = async (user: LoginDto) => {
    try {
      const userFromDatabase = await User.findOne({ username: user.username }).lean();
      if (!userFromDatabase) throw new Error("user not found");
      const match = await compare(user.password, userFromDatabase.password);
      if (!match) throw new Error("wrong password");
      const token = await jwt.sign({
        user_id: userFromDatabase._id,
        isAdmin: userFromDatabase.isAdmin,
        username: userFromDatabase.username
      }, process.env.JWT_SECRET as string, {
        expiresIn: "10m"
      })
      return {...userFromDatabase, token, password: "******"};
    } catch (err) {
      throw err;
    }
  };
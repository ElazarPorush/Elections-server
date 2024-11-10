import { Schema, Types, Document, model } from "mongoose"

export interface IUser extends Document{
    username: string
    password: string
    isAdmin: boolean
    hasVoted: boolean
    votedFor: Types.ObjectId
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {type: String, required: true},
    isAdmin: {
        type: Boolean,
        default: false
    },
    hasVoted: {
        type: Boolean,
        default: false
    },
    votedFor: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate'
    }
})

export default model("User", userSchema)
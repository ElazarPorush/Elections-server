import { Schema, Document, model } from "mongoose"

export interface ICandidate extends Document{
    name: string
    image: string
    voted: number
}

const candidateSchema = new Schema<ICandidate>({
    name: {
        type: String,
        unique: true
    },
    image: String,
    voted: {
        type: Number,
        default: null
    },
})

export default model("Candidate", candidateSchema)
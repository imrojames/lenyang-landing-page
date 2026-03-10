import mongoose, { Document, Schema } from "mongoose";

export interface IAbout extends Document {
    pi_id: mongoose.Types.ObjectId; // Reference to PersonalInfo
    profession: string[]; // Array of proffession
    description: string;
    skills: string[]; // Array of skills
    isDeleted: boolean; // soft delete flag
    createdAt: Date;
    updatedAt: Date;
}

const AboutSchema: Schema = new Schema({
    pi_id: { type: Schema.Types.ObjectId, ref: 'PersonalInfo', required: true },
    profession: { type: [String], default: [], required: true },
    description: { type: String, required: true },
    skills: { type: [String], default: [], required: true },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model<IAbout>("About", AboutSchema);
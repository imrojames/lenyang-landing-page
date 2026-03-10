import mongoose, { Document, Schema } from "mongoose";

interface IExperience {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date; // Optional for current positions
    description: string;
}

export interface IExperiences extends Document {
    pi_id: mongoose.Types.ObjectId; // Reference to PersonalInfo
    experiences: IExperience[]; //Array of experience object
    isDeleted?: boolean; // Soft delete flag
}

const ExperienceSchema: Schema = new Schema({
    pi_id: { type: Schema.Types.ObjectId, ref: 'PersonalInfo', required: true },
    experiences: [{
        title: { type: String, required: true },
        company: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        description: { type: String, required: true }
    }],
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model<IExperiences>("Experience", ExperienceSchema);
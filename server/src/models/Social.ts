import mongoose, { Document, Schema } from "mongoose";

export interface ISocial extends Document {
    pi_id: mongoose.Types.ObjectId; // Reference to PersonalInfo
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    isDeleted: boolean; // soft delete flag
    createdAt: Date;
    updatedAt: Date;
}

const SocialSchema: Schema = new Schema({
    pi_id: { type: Schema.Types.ObjectId, ref: 'PersonalInfo', required: true },
    linkedin: { type: String, default: null },
    github: { type: String, default: null },
    twitter: { type: String, default: null },
    facebook: { type: String, default: null },
    instagram: { type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model<ISocial>("Social", SocialSchema);
import mongoose, { Document, Schema } from "mongoose";

interface IService {
    name: string;
    description: string;
}

export interface IServices extends Document {
    pi_id: mongoose.Types.ObjectId; // Reference to PersonalInfo
    services: IService[]; // Array of service objects
    isDeleted?: boolean; // Soft delete flag
}

const ServiceSchema: Schema = new Schema({
    pi_id: { type: Schema.Types.ObjectId, ref: 'PersonalInfo', required: true },
    services: [{
        name: { type: String, required: true },
        description: { type: String, required: true }
    }],
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model<IServices>("Services", ServiceSchema);
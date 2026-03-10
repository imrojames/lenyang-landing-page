import mongoose, { Document, Schema } from "mongoose";

export interface IPersonalInfo extends Document {
  fname: string;
  lname: string;
  mname?: string;
  email: string;
  phone: string;
  address: string;
  isDeleted: boolean; // soft delete flag
  createdAt: Date;
  updatedAt: Date;
}

const PersonalInfoSchema: Schema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    mname: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model<IPersonalInfo>("PersonalInfo", PersonalInfoSchema);
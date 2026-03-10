import mongoose, {Document, Schema} from "mongoose";

interface IPorfolio {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}

export interface IPorfolios extends Document {
    pi_id: mongoose.Types.ObjectId; // Reference to PersonalInfo
    portfolios: IPorfolio[]; // Array of portfolio objects
    isDeleted?: boolean; // Soft delete flag
}

const PortfolioSchema: Schema = new Schema({
    pi_id: { type: Schema.Types.ObjectId, ref: 'PersonalInfo', required: true },
    portfolios: [{
        title: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
        imageUrl: { type: String, required: true }
    }],
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model<IPorfolios>("Portfolio", PortfolioSchema);
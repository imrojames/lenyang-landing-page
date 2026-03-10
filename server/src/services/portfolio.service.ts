import Portfolio, {IPorfolios} from "../models/Portfolio";

// Create a new portfolio entry
export const createPortfolio = async (data: Partial<IPorfolios>): Promise<IPorfolios> => {
    const newPortfolio = new Portfolio({ data });
    return newPortfolio.save();
}

// get portfolio by personal info ID
export const getPortfolioByPersonalInfoId = async (pi_id: string) => {
    return await Portfolio.findOne({ pi_id, isDeleted: false });
}

// update portfolio by personal info ID
export const updatePortfolioByPersonalInfoId = async (pi_id: string, update: Partial<IPorfolios>): Promise<IPorfolios | null> => {
    return await Portfolio.findOneAndUpdate({ pi_id, isDeleted: false }, update, { new: true });
}

// delete portfolio by personal info ID (soft delete)
export const deletePortfolioByPersonalInfoId = async (pi_id: string) => {
    return await Portfolio.findOneAndUpdate({ pi_id, isDeleted: false }, { isDeleted: true }, { new: true });
}
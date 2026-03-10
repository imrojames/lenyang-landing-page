import Experience from "../models/Experience";
import { IExperiences } from "../models/Experience";

// create experience
export const createExperience = async (experienceData: IExperiences): Promise<IExperiences> => {
    const experience = new Experience(experienceData);
    return await experience.save();
}

// get experience by personal info id
export const getExperienceByPiId = async (pi_id: string): Promise<IExperiences | null> => {
    return await Experience.findOne({ pi_id, isDeleted: false });
}

// update experience by personal info id
export const updateExperienceByPiId = async (pi_id: string, experienceData: Partial<IExperiences>): Promise<IExperiences | null> => {
    return await Experience.findOneAndUpdate({ pi_id, isDeleted: false }, experienceData, { new: true });
}

// delete experience by personal info id (soft delete)
export const deleteExperienceByPiId = async (pi_id: string): Promise<IExperiences | null> => {
    return await Experience.findOneAndUpdate({ pi_id, isDeleted: false }, { isDeleted: true }, { new: true });
}
import About, {IAbout} from "../models/About";

// Create a new about entry
export const createAbout = async (data: Partial<IAbout>): Promise<IAbout> => {
    const about = new About(data);
    return about.save();
}

// get about entry by personal info ID
export const getAboutByPersonalInfoId = async (pi_id: string): Promise<IAbout | null> => {
    return About.findOne({ pi_id, isDeleted: false });
}

// update about entry
export const updateAbout = async (pi_id: string, update: Partial<IAbout>): Promise<IAbout | null> => {
    return About.findOneAndUpdate(
        { pi_id, isDeleted: false },
        update,
        { new: true }
    );
}

// soft delete about entry
export const deleteAbout = async (pi_id: string): Promise<IAbout | null> => {
    return About.findOneAndUpdate(
        { pi_id, isDeleted: false },
        { isDeleted: true },
        { new: true }
    );
}
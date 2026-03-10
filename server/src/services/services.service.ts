import Services, {IServices} from "../models/Services";

// Creat Services entries
export const createServices = async (data: Partial<IServices>): Promise<IServices> => {
    const services = new Services(data);
    return services.save();
}

// Get services bby personalId
export const getServicesByPersonalInfoId = async (pi_id: string): Promise<IServices | null> => {
    return Services.findOne({ pi_id, isDeleted: false });
}

// patch services entry
export const updateServices = async (pi_id: string, update: Partial<IServices>): Promise<IServices | null> => {
    return Services.findOneAndUpdate({pi_id, isDeleted: false}, update, {new: true});
}

// soft delete
export const deleteServices = async (pi_id: string): Promise<IServices | null> => {
    return Services.findOneAndUpdate({pi_id, isDeleted: false}, {isDeleted: true}, {new: true});
}
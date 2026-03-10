import PersonalInfo, { IPersonalInfo } from '../models/PersonalInfo';

/**
 * Business logic for personal information records.
 * These functions are used by the controllers and keep
 * the database interaction separate from HTTP concerns.
 */

// create a new entry
export const createPersonalInfo = async (
  data: Partial<IPersonalInfo>
): Promise<IPersonalInfo> => {
  const personalInfo = new PersonalInfo(data);
  return personalInfo.save();
};

// retrive by id non-delete entries
export const getPersonalInfoById = async (
  id: string
): Promise<IPersonalInfo> => {
  const personalInfo = await PersonalInfo.findOne({ _id: id, isDeleted: false });
  if (!personalInfo) {
    throw new Error('Personal information not found or deleted');
  }
  return personalInfo;
};

// retrieve all non-deleted entries
export const getAllPersonalInfo = async (): Promise<IPersonalInfo[]> => {
  return PersonalInfo.find({ isDeleted: false });
};

// update an entry if it isn't soft‑deleted
export const patchPersonalInfo = async (
  id: string,
  update: Partial<IPersonalInfo>
): Promise<IPersonalInfo | null> => {
  return PersonalInfo.findOneAndUpdate(
    { _id: id, isDeleted: false },
    update,
    { new: true }
  );
};

// soft‑delete an entry
export const deletePersonalInfo = async (
  id: string
): Promise<IPersonalInfo | null> => {
  return PersonalInfo.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );
};

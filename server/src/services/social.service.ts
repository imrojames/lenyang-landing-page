import Social, { ISocial } from "../models/Social";

/**
 * Business logic for social media records.
 */

// Create a new social media entry
export const createSocialMedia = async (
  data: Partial<ISocial>
): Promise<ISocial> => {
  const socialMedia = new Social(data);
  return socialMedia.save();
};

// Get social media entry by personal information ID (excluding soft deleted)
export const getSocialMediaByPersonalInfoId = async (
  pi_id: string
): Promise<ISocial | null> => {
  return Social.findOne({ pi_id, isDeleted: false });
};

// Update social media entry
export const updateSocialMedia = async (
  pi_id: string,
  update: Partial<ISocial>
): Promise<ISocial | null> => {
  return Social.findOneAndUpdate(
    { pi_id, isDeleted: false },
    update,
    { new: true }
  );
};

// Soft delete social media entry
export const deleteSocialMedia = async (
  pi_id: string
): Promise<ISocial | null> => {
  return Social.findOneAndUpdate(
    { pi_id, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );
};
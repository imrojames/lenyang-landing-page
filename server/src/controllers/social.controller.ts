import { request, response } from 'express';
import * as socialService from '../services/social.service';

// Create social media per user
export const createSocialMedia = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const savedInfo = await socialService.createSocialMedia(req.body);
        res.status(201).json({ message: "Social media created successfully", data: savedInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Get social media entry by personal information ID
export const getSocialMediaByPersonalInfoId = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const socialMedia = await socialService.getSocialMediaByPersonalInfoId(personalInfoId);
        if (!socialMedia) {
            res.status(404).json({ error: 'Social media entry not found' });
            return;
        }
        res.status(200).json(socialMedia);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Update social media entry
export const updateSocialMedia = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const updatedInfo = await socialService.updateSocialMedia(personalInfoId, req.body);
        if (!updatedInfo) {
            res.status(404).json({ error: 'Social media entry not found' });
            return;
        }
        res.status(200).json({ message: "Social media updated successfully", data: updatedInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Soft delete social media entry
export const deleteSocialMedia = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const deleted = await socialService.deleteSocialMedia(personalInfoId);
        if (!deleted) {
            res.status(404).json({ error: 'Social media entry not found or already deleted' });
            return;
        }
        res.status(200).json({ message: "Social media soft-deleted successfully", data: deleted });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
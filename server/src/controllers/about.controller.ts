import {request, response} from 'express';
import * as aboutService from '../services/about.service';

// Create about entry
export const createAbout = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const savedInfo = await aboutService.createAbout(req.body);
        res.status(201).json({ message: "About entry created successfully", data: savedInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Get about entry by personal info ID
export const getAboutByPersonalInfoId = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const aboutInfo = await aboutService.getAboutByPersonalInfoId(personalInfoId);
        if (!aboutInfo) {
            res.status(404).json({ message: "About entry not found" });
            return;
        }
        res.status(200).json({ data: aboutInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Update about entry
export const updateAbout = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const updatedInfo = await aboutService.updateAbout(personalInfoId, req.body);
        if (!updatedInfo) {
            res.status(404).json({ message: "About entry not found" });
            return;
        }
        res.status(200).json({ message: "About entry updated successfully", data: updatedInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Soft delete about entry
export const deleteAbout = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const deleted = await aboutService.deleteAbout(personalInfoId);
        if (!deleted) {
            res.status(404).json({ message: "About entry not found or already deleted" });
            return;
        }
        res.status(200).json({ message: "About entry soft-deleted successfully", data: deleted });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
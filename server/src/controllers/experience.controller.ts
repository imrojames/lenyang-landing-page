import {request, response} from 'express';
import * as ExperiencesService from '../services/experience.service';

// create experience
export const createExperience = async (req: typeof request, res: typeof response) => {
    try {
        const experience = await ExperiencesService.createExperience(req.body);
        res.status(201).json(experience);
    } catch (error) {
        res.status(500).json({ message: "Error creating experience", error });
    }
}

// get experience by personal info id
export const getExperienceByPiId = async (req: typeof request, res: typeof response) => {
    try {
        const id = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const experience = await ExperiencesService.getExperienceByPiId(id);
        if (!experience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: "Error fetching experience", error });
    }
}

// update experience by personal info id
export const updateExperienceByPiId = async (req: typeof request, res: typeof response) => {
    try {
        const id = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const experience = await ExperiencesService.updateExperienceByPiId(id, req.body);
        if (!experience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: "Error updating experience", error });
    }
}

// delete experience by personal info id (soft delete)
export const deleteExperienceByPiId = async (req: typeof request, res: typeof response) => {
    try {
        const id = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const experience = await ExperiencesService.deleteExperienceByPiId(id);
        if (!experience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json({ message: "Experience deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting experience", error });
    }
}
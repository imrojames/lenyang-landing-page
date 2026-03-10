import {request, response} from "express";
import * as ServiceOfferedService from "../services/services.service";

// Create Services entry
export const createService = async(req: typeof request, res: typeof response): Promise<void> => {
    try {
        const savedInfo = await ServiceOfferedService.createServices(req.body);
        res.status(201).json({ message: "Services created successfully", data: savedInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Get services by personainfoId
export const getServiceByPersonalInfoId = async(req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const serviceInfo = await ServiceOfferedService.getServicesByPersonalInfoId(personalInfoId);
        if (!serviceInfo) {
            res.status(404).json({ error: "Services not found" });
            return;
        }
        res.status(200).json({ data: serviceInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Update services entry
export const updateService = async(req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const updatedInfo = await ServiceOfferedService.updateServices(personalInfoId, req.body);
        if (!updatedInfo) {
            res.status(404).json({ error: "Services not found" });
            return;
        }
        res.status(200).json({ message: "Services updated successfully", data: updatedInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Soft delete services entry
export const deleteService = async(req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const deletedInfo = await ServiceOfferedService.deleteServices(personalInfoId);
        if (!deletedInfo) {
            res.status(404).json({ error: "Services not found" });
            return;
        }
        res.status(200).json({ message: "Services deleted successfully", data: deletedInfo });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
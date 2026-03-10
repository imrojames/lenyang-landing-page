import {request, response} from 'express';
import * as personalInfoService from '../services/personalinfo.service';

// Create a new personal information entry
export const createPersonalInfo = async (req: typeof request, res: typeof response): Promise<void> => {
  try {
    const savedInfo = await personalInfoService.createPersonalInfo(req.body);
    res.status(201).json(savedInfo);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Get personal information by id (excluding soft deleted)
export const getPersonalInfoById = async (req: typeof request, res: typeof response): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const personalInfo = await personalInfoService.getPersonalInfoById(id);
    res.status(200).json(personalInfo);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};

// Get all personal information entries (excluding soft deleted)
export const getAllPersonalInfo = async (req: typeof request, res: typeof response): Promise<void> => {
  try {
    const personalInfos = await personalInfoService.getAllPersonalInfo();
    res.status(200).json(personalInfos);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const patchPersonalInfo = async (req: typeof request, res: typeof response): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const updatedInfo = await personalInfoService.patchPersonalInfo(id, req.body);
    if (!updatedInfo) {
      res.status(404).json({ error: 'Personal information not found' });
      return;
    }
    res.status(200).json(updatedInfo);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Soft delete personal information entry
export const deletePersonalInfo = async (req: typeof request, res: typeof response): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const deleted = await personalInfoService.deletePersonalInfo(id);
    if (!deleted) {
      res.status(404).json({ error: 'Personal information not found or already deleted' });
      return;
    }
    res.status(200).json({ message: 'Personal information soft-deleted', data: deleted });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

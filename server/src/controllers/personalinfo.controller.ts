import {request, response} from 'express';
import PersonalInfo from '../models/PersonalInfo';

// Create a new personal information entry
export const createPersonalInfo = async (req: typeof request, res: typeof response): Promise<void> => {
  try {
    const personalInfo = new PersonalInfo(req.body);
    const savedInfo = await personalInfo.save();
    res.status(201).json(savedInfo);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Get all personal information entries
export const getAllPersonalInfo = async (req: typeof request, res: typeof response): Promise<void> => {
  try {
    const personalInfos = await PersonalInfo.find();
    res.status(200).json(personalInfos);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
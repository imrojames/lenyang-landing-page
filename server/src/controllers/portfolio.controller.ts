import {request, response} from 'express';
import * as PortfolioService from '../services/portfolio.service';

// Create a new portfolio entry
export const createPortfolio = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const savedPortfolio = await PortfolioService.createPortfolio(req.body);
        res.status(201).json({ message: "Porfolio created successfully", data: savedPortfolio });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Get portfolio by personal info ID
export const getPortfolioByPersonalInfoId = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const id = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const portfolio = await PortfolioService.getPortfolioByPersonalInfoId(id);
        if (!portfolio) {
            res.status(404).json({ error: 'Portfolio not found' });
            return;
        }
        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch portfolio' });
    }
}

// Update portfolio by personal info ID
export const updatePortfolioByPersonalInfoId = async (req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const updatedPortfolio = await PortfolioService.updatePortfolioByPersonalInfoId(personalInfoId, req.body);
        if (!updatedPortfolio) {
            res.status(404).json({ error: 'Portfolio not found' });
            return;
        }
        res.status(200).json(updatedPortfolio);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update portfolio' });
    }
}

// Soft delete portfolio entry
export const deletePorfolio = async(req: typeof request, res: typeof response): Promise<void> => {
    try {
        const personalInfoId = Array.isArray(req.params.personalInfoId) ? req.params.personalInfoId[0] : req.params.personalInfoId;
        const deletePortfolio = await PortfolioService.deletePortfolioByPersonalInfoId(personalInfoId);
        if (!deletePorfolio) {
            res.status(404).json({ error: "Portfolio not found" });
            return;
        }
        res.status(200).json({ message: "Services deleted successfully", data: deletePortfolio });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
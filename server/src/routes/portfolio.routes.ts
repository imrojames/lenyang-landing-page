import {Router} from "express";
import * as portfolioController from "../controllers/portfolio.controller";

const portfolioRouter = Router();

/**
 * @swagger
 * /api/portfolio:
 *   post:
 *     summary: Create a new portfolio
 *     description: Creates a new portfolio record with an array of portfolio items
 *     tags:
 *       - Portfolio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - pi_id
 *               - portfolios
 *             properties:
 *               pi_id:
 *                 type: string
 *                 description: ID of the associated PersonalInfo
 *               portfolios:
 *                 type: array
 *                 description: Array of portfolio items
 *                 items:
 *                   type: object
 *                   required:
 *                     - title
 *                     - description
 *                     - link
 *                     - imageUrl
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Portfolio item title
 *                     description:
 *                       type: string
 *                       description: Portfolio item description
 *                     link:
 *                       type: string
 *                       description: URL link to the portfolio item
 *                     imageUrl:
 *                       type: string
 *                       description: URL of the portfolio item image
 *     responses:
 *       201:
 *         description: Portfolio created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 portfolios:
 *                   type: array
 *                 isDeleted:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Failed to create portfolio
 */
portfolioRouter.post('/', portfolioController.createPortfolio);

/**
 * @swagger
 * /api/portfolio/{personalInfoId}:
 *   get:
 *     summary: Get portfolio by Personal Info ID
 *     description: Retrieves portfolio record for a specific personal info ID
 *     tags:
 *       - Portfolio
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the PersonalInfo associated with the portfolio
 *     responses:
 *       200:
 *         description: Portfolio retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 portfolios:
 *                   type: array
 *                 isDeleted:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Portfolio not found
 *       500:
 *         description: Failed to fetch portfolio
 */
portfolioRouter.get('/:personalInfoId', portfolioController.getPortfolioByPersonalInfoId);

/**
 * @swagger
 * /api/portfolio/{personalInfoId}:
 *   patch:
 *     summary: Update portfolio by Personal Info ID
 *     description: Updates an existing portfolio record for a specific personal info ID
 *     tags:
 *       - Portfolio
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the PersonalInfo associated with the portfolio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               portfolios:
 *                 type: array
 *                 description: Updated array of portfolio items
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Portfolio item title
 *                     description:
 *                       type: string
 *                       description: Portfolio item description
 *                     link:
 *                       type: string
 *                       description: URL link to the portfolio item
 *                     imageUrl:
 *                       type: string
 *                       description: URL of the portfolio item image
 *     responses:
 *       200:
 *         description: Portfolio updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 portfolios:
 *                   type: array
 *                 isDeleted:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Portfolio not found
 *       500:
 *         description: Failed to update portfolio
 */
portfolioRouter.patch('/:personalInfoId', portfolioController.updatePortfolioByPersonalInfoId);

/**
 * @swagger
 * /api/portfolio/{personalInfoId}:
 *   delete:
 *     summary: Delete portfolio by Personal Info ID
 *     description: Soft deletes a portfolio record for a specific personal info ID
 *     tags:
 *       - Portfolio
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the PersonalInfo associated with the portfolio
 *     responses:
 *       200:
 *         description: Portfolio deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       404:
 *         description: Portfolio not found
 *       500:
 *         description: Failed to delete portfolio
 */
portfolioRouter.delete('/:personalInfoId', portfolioController.deletePorfolio);

export default portfolioRouter;
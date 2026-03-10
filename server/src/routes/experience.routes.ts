import { Router } from "express";
import * as ExperiencesController from "../controllers/experience.controller";

const experienceRouter = Router();

/**
 * @swagger
 * /api/experience:
 *   post:
 *     summary: Create a new experience
 *     description: Creates a new experience record with an array of work experiences
 *     tags:
 *       - Experience
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - pi_id
 *               - experiences
 *             properties:
 *               pi_id:
 *                 type: string
 *                 description: ID of the associated PersonalInfo
 *               experiences:
 *                 type: array
 *                 description: Array of work experiences
 *                 items:
 *                   type: object
 *                   required:
 *                     - title
 *                     - company
 *                     - startDate
 *                     - description
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Job title
 *                     company:
 *                       type: string
 *                       description: Company name
 *                     startDate:
 *                       type: string
 *                       format: date-time
 *                       description: Start date of employment
 *                     endDate:
 *                       type: string
 *                       format: date-time
 *                       description: End date of employment (optional for current positions)
 *                     description:
 *                       type: string
 *                       description: Description of work experience
 *     responses:
 *       201:
 *         description: Experience created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 experiences:
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
 *         description: Error creating experience
 */
experienceRouter.post("/", ExperiencesController.createExperience);

/**
 * @swagger
 * /api/experience/{personalInfoId}:
 *   get:
 *     summary: Get experience by Personal Info ID
 *     description: Retrieves experience record for a specific personal info ID
 *     tags:
 *       - Experience
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the PersonalInfo associated with the experience
 *     responses:
 *       200:
 *         description: Experience retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 experiences:
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
 *         description: Experience not found
 *       500:
 *         description: Error fetching experience
 */
experienceRouter.get("/:personalInfoId", ExperiencesController.getExperienceByPiId);

/**
 * @swagger
 * /api/experience/{personalInfoId}:
 *   put:
 *     summary: Update experience by Personal Info ID
 *     description: Updates an existing experience record for a specific personal info ID
 *     tags:
 *       - Experience
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the PersonalInfo associated with the experience
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               experiences:
 *                 type: array
 *                 description: Updated array of work experiences
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Job title
 *                     company:
 *                       type: string
 *                       description: Company name
 *                     startDate:
 *                       type: string
 *                       format: date-time
 *                       description: Start date of employment
 *                     endDate:
 *                       type: string
 *                       format: date-time
 *                       description: End date of employment
 *                     description:
 *                       type: string
 *                       description: Description of work experience
 *     responses:
 *       200:
 *         description: Experience updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 experiences:
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
 *         description: Experience not found
 *       500:
 *         description: Error updating experience
 */
experienceRouter.put("/:personalInfoId", ExperiencesController.updateExperienceByPiId);

/**
 * @swagger
 * /api/experience/{personalInfoId}:
 *   delete:
 *     summary: Delete experience by Personal Info ID
 *     description: Soft deletes an experience record for a specific personal info ID
 *     tags:
 *       - Experience
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the PersonalInfo associated with the experience
 *     responses:
 *       200:
 *         description: Experience deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Experience not found
 *       500:
 *         description: Error deleting experience
 */
experienceRouter.delete("/:personalInfoId", ExperiencesController.deleteExperienceByPiId);

export default experienceRouter;
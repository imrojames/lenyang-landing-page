import { Router } from "express";
import * as servicesController from "../controllers/services.controller";

const servicesRouter = Router();

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Create a new services entry for a personal info record
 *     tags:
 *       - Services
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pi_id:
 *                 type: string
 *                 description: ID of the related personal info entry
 *               services:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Name of the service offered
 *                     description:
 *                       type: string
 *                       description: Description of the service
 *             required:
 *               - pi_id
 *               - services
 *     responses:
 *       201:
 *         description: Services created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 services:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                 isDeleted:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Bad request - validation error
 *       500:
 *         description: Server error
 */

servicesRouter.post("/", servicesController.createService);

/**
 * @swagger
 * /api/services/{personalInfoId}:
 *   get:
 *     summary: Retrieve services entry by personal info ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the personal info entry
 *     responses:
 *       200:
 *         description: Services entry retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 services:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                 isDeleted:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Services entry not found
 *       500:
 *         description: Server error
 *   patch:
 *     summary: Update services entry by personal info ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the personal info entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               services:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *     responses:
 *       200:
 *         description: Services entry updated successfully
 *       404:
 *         description: Services entry not found
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Soft delete services entry by personal info ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the personal info entry
 *     responses:
 *       200:
 *         description: Services entry soft-deleted successfully
 *       404:
 *         description: Services entry not found or already deleted
 *       500:
 *         description: Server error
 */
servicesRouter.get("/:personalInfoId", servicesController.getServiceByPersonalInfoId);
servicesRouter.patch("/:personalInfoId", servicesController.updateService);
servicesRouter.delete("/:personalInfoId", servicesController.deleteService);

export default servicesRouter;
import router from 'express';
import { createPersonalInfo, getPersonalInfoById, getAllPersonalInfo, patchPersonalInfo, deletePersonalInfo } from '../controllers/personalinfo.controller';

const personalInfoRouter = router.Router();

/**
 * @swagger
 * /api/personalinfo:
 *   post:
 *     summary: Create a new personal information entry
 *     tags:
 *       - Personal Info
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fname:
 *                 type: string
 *                 description: First name
 *               lname:
 *                 type: string
 *                 description: Last name
 *               mname:
 *                 type: string
 *                 description: Middle name (optional)
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address (must be unique)
 *               phone:
 *                 type: string
 *                 description: Phone number
 *               address:
 *                 type: string
 *                 description: Street address
 *             required:
 *               - fname
 *               - lname
 *               - email
 *               - phone
 *               - address
 *     responses:
 *       201:
 *         description: Personal information created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 fname:
 *                   type: string
 *                 lname:
 *                   type: string
 *                 mname:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 address:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Bad request - validation error
 *   get:
 *     summary: Get all personal information entries
 *     tags:
 *       - Personal Info
 *     responses:
 *       200:
 *         description: List of all personal information entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   fname:
 *                     type: string
 *                   lname:
 *                     type: string
 *                   mname:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   address:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error
 * /api/personalinfo/{id}:
 *   get:
 *     summary: Get personal information by ID
 *     tags:
 *       - Personal Info
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Personal information ID
 *     responses:
 *       200:
 *         description: Personal information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 fname:
 *                   type: string
 *                 lname:
 *                   type: string
 *                 mname:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 address:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Personal information not found
 *       500:
 *         description: Server error
 *   patch:
 *     summary: Update personal information by ID
 *     tags:
 *       - Personal Info
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Personal information ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fname:
 *                 type: string
 *               lname:
 *                 type: string
 *               mname:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Personal information updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Personal information not found
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Soft delete personal information by ID
 *     tags:
 *       - Personal Info
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Personal information ID
 *     responses:
 *       200:
 *         description: Entry soft-deleted successfully
 *       404:
 *         description: Personal information not found or already deleted
 *       500:
 *         description: Server error
 */

personalInfoRouter.post('/', createPersonalInfo);
personalInfoRouter.get('/:id', getPersonalInfoById);
personalInfoRouter.get('/', getAllPersonalInfo);
personalInfoRouter.patch('/:id', patchPersonalInfo);
personalInfoRouter.delete('/:id', deletePersonalInfo);

export default personalInfoRouter;
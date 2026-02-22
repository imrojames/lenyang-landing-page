import router from 'express';
import { createPersonalInfo, getAllPersonalInfo } from '../controllers/personalinfo.controller';

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
 */

personalInfoRouter.post('/', createPersonalInfo);
personalInfoRouter.get('/', getAllPersonalInfo);

export default personalInfoRouter;
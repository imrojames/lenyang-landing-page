import router from 'express';
import { createAbout, getAboutByPersonalInfoId, updateAbout, deleteAbout } from '../controllers/about.controller';

const aboutRouter = router.Router();

/**
 * @swagger
 * /api/about:
 *   post:
 *     summary: Create a new about section entry
 *     tags:
 *       - About
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
 *               profession:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of professions or job titles
 *               description:
 *                 type: string
 *                 description: Description or bio
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of skills
 *             required:
 *               - pi_id
 *               - profession
 *               - description
 *               - skills
 *     responses:
 *       201:
 *         description: About section created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 profession:
 *                   type: array
 *                   items:
 *                     type: string
 *                 description:
 *                   type: string
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: string
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

aboutRouter.post('/', createAbout);

/**
 * @swagger
 * /api/about/{personalInfoId}:
 *   get:
 *     summary: Retrieve about section by personal info ID
 *     tags:
 *       - About
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the personal info entry
 *     responses:
 *       200:
 *         description: About entry retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 profession:
 *                   type: array
 *                   items:
 *                     type: string
 *                 description:
 *                   type: string
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: string
 *                 isDeleted:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: About entry not found
 *       500:
 *         description: Server error
 *   patch:
 *     summary: Update about section by personal info ID
 *     tags:
 *       - About
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
 *               profession:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: About entry updated successfully
 *       404:
 *         description: About entry not found
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Soft delete about section by personal info ID
 *     tags:
 *       - About
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the personal info entry
 *     responses:
 *       200:
 *         description: About entry soft-deleted successfully
 *       404:
 *         description: About entry not found or already deleted
 *       500:
 *         description: Server error
 */
aboutRouter.get('/:personalInfoId', getAboutByPersonalInfoId);
aboutRouter.patch('/:personalInfoId', updateAbout);
aboutRouter.delete('/:personalInfoId', deleteAbout);

export default aboutRouter;
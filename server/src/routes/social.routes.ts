import router from 'express';
import { createSocialMedia, getSocialMediaByPersonalInfoId, updateSocialMedia, deleteSocialMedia } from '../controllers/social.controller';

const socialRouter = router.Router();

/**
 * @swagger
 * /api/social:
 *   post:
 *     summary: Create a new social media entry for a user
 *     tags:
 *       - Social Media
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pi_id:
 *                 type: string
 *                 description: Personal information ID (reference to PersonalInfo)
 *               linkedin:
 *                 type: string
 *                 description: LinkedIn profile URL (optional)
 *               github:
 *                 type: string
 *                 description: GitHub profile URL (optional)
 *               twitter:
 *                 type: string
 *                 description: Twitter profile URL (optional)
 *               facebook:
 *                 type: string
 *                 description: Facebook profile URL (optional)
 *               instagram:
 *                 type: string
 *                 description: Instagram profile URL (optional)
 *             required:
 *               - pi_id
 *     responses:
 *       201:
 *         description: Social media entry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     pi_id:
 *                       type: string
 *                     linkedin:
 *                       type: string
 *                     github:
 *                       type: string
 *                     twitter:
 *                       type: string
 *                     facebook:
 *                       type: string
 *                     instagram:
 *                       type: string
 *                     isDeleted:
 *                       type: boolean
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Bad request - validation error
 *       500:
 *         description: Server error
 * /api/social/{personalInfoId}:
 *   get:
 *     summary: Get social media entry by personal information ID
 *     tags:
 *       - Social Media
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: Personal information ID
 *     responses:
 *       200:
 *         description: Social media entry retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 pi_id:
 *                   type: string
 *                 linkedin:
 *                   type: string
 *                 github:
 *                   type: string
 *                 twitter:
 *                   type: string
 *                 facebook:
 *                   type: string
 *                 instagram:
 *                   type: string
 *                 isDeleted:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Social media entry not found
 *       500:
 *         description: Server error
 *   patch:
 *     summary: Update social media entry by personal information ID
 *     tags:
 *       - Social Media
 *     parameters:
 *       - in: path
 *         name: personalInfoId
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
 *               linkedin:
 *                 type: string
 *               github:
 *                 type: string
 *               twitter:
 *                 type: string
 *               facebook:
 *                 type: string
 *               instagram:
 *                 type: string
 *     responses:
 *       200:
 *         description: Social media entry updated successfully
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
 *         description: Social media entry not found
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Soft delete social media entry by personal information ID
 *     tags:
 *       - Social Media
 *     parameters:
 *       - in: path
 *         name: personalInfoId
 *         schema:
 *           type: string
 *         required: true
 *         description: Personal information ID
 *     responses:
 *       200:
 *         description: Social media entry soft-deleted successfully
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
 *         description: Social media entry not found or already deleted
 *       500:
 *         description: Server error
 */

socialRouter.post('/', createSocialMedia);
socialRouter.get('/:personalInfoId', getSocialMediaByPersonalInfoId);
socialRouter.patch('/:personalInfoId', updateSocialMedia);
socialRouter.delete('/:personalInfoId', deleteSocialMedia);

export default socialRouter;

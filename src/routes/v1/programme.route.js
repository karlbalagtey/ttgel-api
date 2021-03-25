const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const programmeValidation = require('../../validations/programme.validation');
const programmeController = require('../../controllers/programme.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageProgrammes'), validate(programmeValidation.createProgramme), programmeController.createProgramme)
  .get(validate(programmeValidation.getProgrammes), programmeController.getProgrammes);

router
  .route('/:programmeId')
  .get(validate(programmeValidation.getProgramme), programmeController.getProgramme)
  .patch(auth('manageProgrammes'), validate(programmeValidation.updateProgramme), programmeController.updateProgramme)
  .delete(auth('manageProgrammes'), validate(programmeValidation.deleteProgramme), programmeController.deleteProgramme);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Programmes
 *   description: Programme management and retrieval
 */

/**
 * @swagger
 * /programmes:
 *   post:
 *     summary: Create a programme
 *     description: Only admins can create other programmes.
 *     tags: [Programmes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - image
 *               - notes
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               notes:
 *                 type: string
 *             example:
 *               title: Programme 1
 *               description: About programme 1 info
 *               image: https://picsum.photos/200
 *               notes: This programme is to be announced
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Programme'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all programmes
 *     description: Everyone can retrieve all programmes.
 *     tags: [Programmes]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Programme title
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of programmes
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Programme'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /programmes/{id}:
 *   get:
 *     summary: Get a programme
 *     description: Only enrolled users can fetch programmes.
 *     tags: [Programmes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Programme id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Programme'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a programme
 *     description: Only admins can update programmes.
 *     tags: [Programmes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Programme id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               notes:
 *                 type: string
 *             example:
 *               title: Updated Programme 1
 *               description: Updated programme description 1
 *               image: https://picsum.photos/200
 *               notes: Updated notess TBA
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Programme'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a programme
 *     description: Only admins can delete programmes.
 *     tags: [Programmes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Programme id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

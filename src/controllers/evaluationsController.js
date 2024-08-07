const { Router } = require("express");

const evaluations = Router();
const service = require("../services/evaluationsService");

/**
 * @swagger
 * tags:
 *   name: Evaluations
 *   description: Evaluation management endpoints
 */

/**
 * @swagger
 * /evaluations:
 *   get:
 *     summary: Retrieve a list of evaluations
 *     tags: [Evaluations]
 *     responses:
 *       200:
 *         description: A list of evaluations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evaluation'
 */
evaluations.get("/", service.listEvaluations);

/**
 * @swagger
 * /evaluations/{id}:
 *   get:
 *     summary: Retrieve a single evaluation by ID
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The evaluation ID
 *     responses:
 *       200:
 *         description: A single evaluation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evaluation'
 *       404:
 *         description: Evaluation not found
 */
evaluations.get("/:id", service.getEvaluation);

/**
 * @swagger
 * /evaluations:
 *   post:
 *     summary: Create a new evaluation
 *     tags: [Evaluations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evaluation'
 *     responses:
 *       201:
 *         description: Evaluation created
 *       400:
 *         description: Bad request
 */
evaluations.post("/", service.createEvaluation);

/**
 * @swagger
 * /evaluations/{id}:
 *   put:
 *     summary: Update an existing evaluation
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The evaluation ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evaluation'
 *     responses:
 *       200:
 *         description: Evaluation updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Evaluation not found
 */
evaluations.put("/:id", service.updateEvaluation);

/**
 * @swagger
 * /evaluations/submit:
 *   post:
 *     summary: Create a new evaluation
 *     tags: [Evaluations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evaluation'
 *     responses:
 *       201:
 *         description: Evaluation created
 *       400:
 *         description: Bad request
 */
evaluations.post("/id:/submit", service.submitEvaluation);

module.exports = evaluations;

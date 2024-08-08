const { Router } = require("express");

const feedBack = Router();
const service = require("../services/feedbackService");

/**
 * @swagger
 * tags:
 *   name: Feedback
 *   description: Feedback related endpoints
 */

/**
 * @swagger
 * /feedback:
 *   post:
 *     summary: Create a new feedback
 *     tags: [Feedback]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       201:
 *         description: Feedback created
 *       400:
 *         description: Bad request
 */
feedBack.post("/", service.createFeedback);

module.exports = feedBack;

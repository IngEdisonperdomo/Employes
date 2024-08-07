const { Router } = require("express");

const questions = Router();
const service = require("../services/questionService");

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Question management endpoints
 */

/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Create a new question
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question'
 *     responses:
 *       201:
 *         description: Question created
 *       400:
 *         description: Bad request
 */
questions.post("/", service.createQuestion);

/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Retrieve a list of questions
 *     tags: [Questions]
 *     responses:
 *       200:
 *         description: A list of questions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Question'
 */
questions.get("/", service.getQuestions);

/**
 * @swagger
 * /questions/{id}:
 *   put:
 *     summary: Update an existing question
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The question ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question'
 *     responses:
 *       200:
 *         description: Question updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Question not found
 */
questions.put("/:id", service.updateQuestion);

module.exports = questions;

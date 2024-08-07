const { Router } = require("express");

const employees = Router();
const service = require("../services/employeesService");

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management endpoints
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Retrieve a list of employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: A list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
employees.get("/", service.listEmployees);

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Retrieve a single employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee ID
 *     responses:
 *       200:
 *         description: A single employee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee not found
 */
employees.get("/:id", service.getEmployee);

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Employee created
 *       400:
 *         description: Bad request
 */
employees.post("/", service.createEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Employee updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Employee not found
 */
employees.put("/:id", service.updateEmployee);

module.exports = employees;

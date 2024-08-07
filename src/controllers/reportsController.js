const { Router } = require("express");

const reports = Router();
const service = require("../services/reportsService");

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Report management endpoints
 */

/**
 * @swagger
 * /reports/employee/{id}:
 *   get:
 *     summary: Retrieve a report for a specific employee
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee ID
 *     responses:
 *       200:
 *         description: Employee report
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The employee ID
 *                 report:
 *                   type: string
 *                   description: The report content
 *       404:
 *         description: Employee not found
 */
reports.get("/employee/:id", service.getEmployeeReport);

/**
 * @swagger
 * /reports/department/{id}:
 *   get:
 *     summary: Retrieve a report for a specific department
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The department ID
 *     responses:
 *       200:
 *         description: Department report
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The department ID
 *                 report:
 *                   type: string
 *                   description: The report content
 *       404:
 *         description: Department not found
 */
reports.get("/department/:id", service.getDepartmentReport);

module.exports = reports;

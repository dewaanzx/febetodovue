const express = require("express");

const router = express.Router();

const TodoController = require("../app/controller/todo.controller");
const TodoValidator = require("../app/validator/todo.validator");
const Auth = require("../middleware/auth.middleware");

/**
 * @openapi
 * /todo:
 *  get:
 *     tags:
 *     - ToDo
 *     summary: Get all ToDo list based on authentication
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("/todo", TodoController.index);

/**
 * @openapi
 * /todo:
 *  post:
 *     tags:
 *     - ToDo
 *     security:
 *     - bearerAuth: []
 *     summary: Add ToDo to the list
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *            properties:
 *              title:
 *               type: string
 *              group_id:
 *               type: integer
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad Request
 *      422:
 *        description: Unprocessable Entity
 *      500:
 *        description: Server Error
 */
router.post("/todo", Auth, TodoValidator.store, TodoController.store);

/**
 * @openapi
 * /todo/{id}:
 *  put:
 *     tags:
 *     - ToDo
 *     security:
 *     - bearerAuth: []
 *     summary: Check (1) or Uncheck (0) ToDo list
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The unique id of the ToDo
 *       required: true
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - checked
 *            properties:
 *              checked:
 *               type: integer
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad Request
 *      422:
 *        description: Unprocessable Entity
 *      500:
 *        description: Server Error
 */
router.put("/todo/:id", Auth, TodoController.update);

/**
 * @openapi
 * /todo/{id}:
 *  delete:
 *     tags:
 *     - ToDo
 *     security:
 *     - bearerAuth: []
 *     summary: Delete ToDo
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The unique id of the todo
 *       required: true
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.delete("/todo/:id", Auth, TodoController.destroy);

module.exports = router;

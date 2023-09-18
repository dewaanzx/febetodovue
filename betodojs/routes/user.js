const express = require("express");

const router = express.Router();

const UserController = require("../app/controller/user.controller");
const UserValidator = require("../app/validator/user.validator");
const Auth = require("../middleware/auth.middleware");

/**
 * @openapi
 * /user:
 *  get:
 *     tags:
 *     - User
 *     security:
 *     - bearerAuth: []
 *     summary: Get all user
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("/user", Auth, UserController.index);

/**
 * @openapi
 * /user:
 *  post:
 *     tags:
 *     - User
 *     summary: Add User
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *              name:
 *               type: string
 *              email:
 *               type: string
 *              password:
 *               type: string
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
router.post("/user", UserValidator.store, UserController.store);

/**
 * @openapi
 * /user/{id}:
 *  get:
 *     tags:
 *     - User
 *     security:
 *     - bearerAuth: []
 *     summary: Get user
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The unique id of the user
 *       required: true
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("/user/:id", Auth, UserController.show);

/**
 * @openapi
 * /user/{id}:
 *  put:
 *     tags:
 *     - User
 *     security:
 *     - bearerAuth: []
 *     summary: Update User
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The unique id of the user
 *       required: true
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *              name:
 *               type: string
 *              email:
 *               type: string
 *              password:
 *               type: string
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
router.put("/user/:id", Auth, UserController.update);

/**
 * @openapi
 * /user/{id}:
 *  delete:
 *     tags:
 *     - User
 *     security:
 *     - bearerAuth: []
 *     summary: Delete user
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The unique id of the user
 *       required: true
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.delete("/user/:id", Auth, UserController.destroy);

/**
 * @openapi
 * /login:
 *  post:
 *     tags:
 *     - Authentication
 *     summary: Login
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *               type: string
 *              password:
 *               type: string
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
router.post("/login", UserValidator.auth, UserController.auth);


module.exports = router;

const express = require("express");

const router = express.Router();

const GroupController = require("../app/controller/group.controller");
const GroupValidator = require("../app/validator/group.validator");
const Auth = require("../middleware/auth.middleware");

/**
 * @openapi
 * /group:
 *  get:
 *     tags:
 *     - Group
 *     security:
 *     - bearerAuth: []
 *     summary: Get all Group list based on authentication
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("/group", Auth, GroupController.index);

/**
 * @openapi
 * /group:
 *  post:
 *     tags:
 *     - Group
 *     security:
 *     - bearerAuth: []
 *     summary: Add Group to the list
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
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
router.post("/group", Auth, GroupValidator.store, GroupController.store);

/**
 * @openapi
 * /group/{id}:
 *  put:
 *     tags:
 *     - Group
 *     security:
 *     - bearerAuth: []
 *     summary: Edit Group
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The unique id of the Group
 *       required: true
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
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
router.put("/group/:id", Auth, GroupController.update);

/**
 * @openapi
 * /group/{id}:
 *  delete:
 *     tags:
 *     - Group
 *     security:
 *     - bearerAuth: []
 *     summary: Delete Group
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The unique id of the group
 *       required: true
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.delete("/group/:id", Auth, GroupController.destroy);

module.exports = router;

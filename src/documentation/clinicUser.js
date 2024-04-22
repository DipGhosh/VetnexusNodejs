/**
 * @swagger
 * tags:
 *   name: Clinic User
 *   description: The User related API
 * components:
 *   schemas:
 *     clinicUser:
 *       type: object
 *       required:
 *        - email
 *        - password
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         email:
 *           type: string
 *           description: The email of your Personal
 *         password:
 *           type: string
 *           description: The password of your Personal
 * /clinic/user/signup:
 *   post:
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/clinicUser'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/clinicUser'
 *       500:
 *         description: Some server error
 *
 */
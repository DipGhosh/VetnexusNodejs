/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The User related API
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *        - name
 *        - email
 *        - phone
 *        - clinic_name
 *        - street_address
 *        - city
 *        - state
 *        - zip_code
 *        - clinic_phone
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The name of your Personal
 *         email:
 *           type: string
 *           description: The email of your Personal
 *         phone:
 *           type: string
 *           description: The phone of your Personal
 *         clinic_name:
 *           type: string
 *           description: The clinic_name of your Personal
 *         street_address:
 *           type: string
 *           description: The street_address of your Personal
 *         city:
 *           type: string
 *           description: The city of your Personal
 *         state:
 *           type: string
 *           description: The state of your Personal
 *         zip_code:
 *           type: string
 *           description: The zip_code of your Personal
 *         clinic_phone:
 *           type: string
 *           description: The clinic_phone of your Personal
 * /auth/signup:
 *   post:
 *     summary: Create a new book
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */
var express = require('express');
var userRouter = express.Router();

/* GET users listing. */
userRouter.post('/signup', function (req, res, next) {
  res.json({ message: 'Response Here', data: req.body });
});
module.exports = userRouter;

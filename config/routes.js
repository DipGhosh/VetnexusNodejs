const clinicUserRouter = require("../src/routes/clinicUser");
const userRouter = require("../src/routes/users");

const routes = (app) => {
    app.use('/clinic/user', clinicUserRouter)
    app.use('/auth', userRouter);
}
module.exports = routes;
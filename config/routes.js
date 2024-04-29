const clinicUserRouter = require("../src/routes/clinicUser");
const userRouter = require("../src/routes/users");
const entityRouter = require("../src/routes/entity");
const routes = (app) => {
    app.use('/clinic/user', clinicUserRouter)
    app.use('/auth', userRouter);
    app.use('/entity', entityRouter)
}
module.exports = routes;
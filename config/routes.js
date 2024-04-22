const indexRouter = require("../src/routes");
const userRouter = require("../src/routes/users");

const routes = (app) => {
    // app.use('/', indexRouter);
    app.use('/auth', userRouter);
}
module.exports = routes;
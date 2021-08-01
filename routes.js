module.exports = app => {
    // GUEST ROUTES
    app.use("/", require('./routes/dashboard'));
    app.use("/dashboard", require('./routes/dashboard'));
    app.use("/users", require('./routes/users'));
    // AUTH ROUTES
    app.use("/login", require("./routes/login"));
    app.use("/register", require("./routes/register"));
    // 404
    app.use("*", require("./routes/notfound"));
}
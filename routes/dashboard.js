const router = require("express").Router();
const User = require("../model/User");
const {ensureAuthenticated} = require("../config/auth")

router.get("/", ensureAuthenticated, async(req, res) => {
    const users = await User.find({});
    return res.render("dashboard", {users});
});

module.exports = router;
const router = require("express").Router();

router.get("/",  (req,res) => {
    return res.render("404Page")
});

module.exports = router;
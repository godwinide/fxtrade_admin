const User = require("../model/User");
const router = require("express").Router();
const {ensureAuthenticated} = require("../config/auth")

router.get("/delete/:id", async(req,res) => {
    try{
        const {id} = req.params;
        if(!id){
            return res.redirect("/");
        }
        await User.deleteOne({_id:id});
        res.redirect("/");
    }catch(err){
        console.log(err)
    }
});


router.get("/edit/:id", ensureAuthenticated, async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.redirect("/")
        }
        return res.render("editUser", {user});
    }catch(err){
        return res.redirect("/");
    }
});


router.post("/edit", async(req,res) => {
    try{
        const {
            id,
            email, 
            fullname,
            phone, 
            username, 
            balance, 
            deposit, 
            last_balance, 
            withdrawer
        } = req.body;
        if(
            !email 
            || !fullname 
            || !phone 
            || !username 
            || !balance 
            || !deposit 
            || !last_balance
            || !withdrawer
        ){
            return res.render("editUser", {user:{...req.body}, error_msg:"Please enter all fields"})
        }

        const user = await User.findById(id);
        if(!user){
            return res.render("editUser", {...req.body, error_msg:"User not found"});
        }

        await user.update({
            email, 
            fullname,
            phone, 
            username, 
            balance, 
            deposit, 
            last_balance, 
            withdrawer
        });
        const _user = await User.findById(id);

        return res.render("editUser", {...req.body, user:_user, success_msg:"User updated successfully"})
    }catch(err){
        return res.render("editUser", {...req.body, error_msg:"Internal server error"});
    }
})


  
module.exports = router;
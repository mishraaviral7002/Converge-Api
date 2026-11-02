
const User = require("../model/db") ;




async function creationOfUser(req, res){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    })
    res.redirect("https://converge-sq19.vercel.app/Login");
}

async function getUser(req, res) {

    try{
        const {email, password} = req.body;
        const User = await User.find({
            email,
            password
        })
        if (User != null) {
            return res.status(401);
        } else {
            return res.send(User.name());
        }
    }
    catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }


}


module.exports = {creationOfUser, getUser}
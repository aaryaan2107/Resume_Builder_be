const express = require("express");
const Router = express.Router();
const user = require("../model/user");
const rdata = require("../model/rdata");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkauth = require('../middleware/checkauth');

const secretkey = "userdata@12#45";

Router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user1 = await user.find({ email: email });
        if (!user1) {
            return res
                .status(401)
                .json({ Message: "Invalid user or password." });
        }
        const validPassword = await bcrypt.compare(password, user1[0].password);
        console.log(!validPassword);
        if (!validPassword) {
            return res.status(401).json({ Message: "Invalid password." });
        }
        const token = jwt.sign({ userid: user1[0]._id,email:user1[0].email }, secretkey, {
            expiresIn: "7d",
        });
        console.log("asdf");
        res.status(200).json({ token: token });
        console.log("login");
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

Router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Username or Password is Empty" });
            return;
        }
        const exist = await user.findOne({ email });
        if (exist) {
            res.status(409).json({ error: "Username already Exist" });
            return;
        }
        const hashpassword = await bcrypt.hash(password, 10);
        console.log("djsjd");
        const newuser = new user({ email: email, password: hashpassword });
        newuser.save();
        res.status(200).json({ message: "signup successfull" });
        console.log("signup");
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

Router.get("/html", async (req, res) => {
    const name = 'avi chovatiya';
    const htmlCode = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Your HTML Page</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <div *ngFor="let a of users">
            <b> ${name} </b>
        </div>
      </body>
    </html>
  `;

    res.json(htmlCode);
    // console.log(htmlCode);
});

Router.get("/rmakeId",checkauth,  async (req, res) => {
    const {userId} = req.body;
    const rmakeId = await user.find({userId}).sort({"rmakeid":-1}).limit(1) ;
    res.json(rmakeId);
});

Router.post("/personal_info",  async (req, res) => {
    const userId = "65bcb60b297437ab8f9408f2";
    const rmakeid = 1;
    const frist_nm = "avi";
    const last_nm = "chovatiya";
    const profession = "web developer";
    const city = "jamnagar";
    const country = "india";
    const pin_code = 361001;
    const phone = 9327027978;
    const email = "avichovatiya0@gmail.com";
    const newrdara = await rdata({userId:userId, rmakeid:rmakeid, frist_nm:frist_nm, last_nm:last_nm, profession:profession, city:city, country:country, pin_code:pin_code, phone:phone, email:email});
    newrdara.save();
}); 


Router.post("/personal_info",  async (req, res) => {
    const userId = "65bcb60b297437ab8f9408f2";
    const rmakeid = 1;
    const skils = [
        {
            name : "web developer"
        },
        {
            name : " wed disgner"
        }
    ]
    rdata.findOneAndUpdate({userId:userId,rmakeid:rmakeid},{skils:skils})
    .then((res1)=>{
        res.json("update");
    })
});

Router.post("/professional_summary",  async (req, res) => {
    const userId = "65bcb60b297437ab8f9408f2";
    const rmakeid = 1;
    const professional_summary = "alkhsdf alskdfh alksdhf alskdfb alksfal sfh aldflaksd laksdfh laksdf alksdhhfiauh uehfhalwiug dhf bale8rugsjf ";
    rdata.findOneAndUpdate({userId:userId,rmakeid:rmakeid},{professional_summary:professional_summary})
    .then((res1)=>{
        res.json("update");
    })
});

Router.post("/work_hs",  async (req, res) => {
    const userId = "65bcb60b297437ab8f9408f2";
    const rmakeid = 1;
    const work_hs = [
        {
            job_title:"web developer",
            emp:"emp",
            location:"jamnagar",
            start_date:"01/2024",
            end_date:"currently",
            job_description:"Coded websites using HTML, CSS, JavaScript, and jQuery languages.",
        },
        {
            job_title:"web developer",
            emp:"emp",
            location:"jamnagar",
            start_date:"01/2024",
            end_date:"currently",
            job_description:"Coded websites using HTML, CSS, JavaScript, and jQuery languages.",
        }
    ]
    rdata.findOneAndUpdate({userId:userId,rmakeid:rmakeid},{work_hs:work_hs})
    .then((res1)=>{
        res.json("update");
    })
});

Router.post("/education",  async (req, res) => {
    const userId = "65bcb60b297437ab8f9408f2";
    const rmakeid = 1;
    const education = [
        {
            s_name:"abc",
            s_location:"Jamnagar",
            degree:"bca",
            field_of_study:"web",
            graduation_date:"03/25",
        }
    ]
    rdata.findOneAndUpdate({userId:userId,rmakeid:rmakeid},{education:education})
    .then((res1)=>{
        res.json("update");
    })
});

module.exports = Router;

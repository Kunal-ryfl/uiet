const express = require('express')
const router = new express.Router();
const  Examiner= require("../models/ExaminerSchema")
const bcrypt = require("bcryptjs")



//Examiner
//creating API for Signup and login( User Authentication)

router.post("/register", async (req, res) => {

    //this is the data which we are getting from frontend
    const { name, email,gender,department, mobile, password, cpassword } = req.body;//req.body contains the whole data

    //checking if any of the input is not filled
    if (!name || !email ||!gender ||!department || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill all the data properly" });
    }

    //if all the data filled, now create a new user

    try {

        //checking if user already exists in database or not , else create a new user
        const user = await Examiner.findOne({ email: email });
        if (user) {
            res.status(422).json({ error: "User already exists" });
        }
        else if (password !== cpassword) {
            res.status(422).json({ error: "password and confirm password do not match" });
        }
        else {

            const newuser = new Examiner({ name, email,gender,department, mobile, password, cpassword});
            const data = await newuser.save();
            // console.log(data);
            //sending data which is fetched from database to frontend to show different pop_ups(toast)
            res.status(201).json(data);
        }
    }
    catch (err) {
        res.status(422).send(err);
    }

})




//api to login

router.post("/login", async (req, res) => {

    //getting data from frontend
    const { email, password } = req.body;
    //console.log(req.body);  , to check if we are getting data from frontend or not


    //cheking if user have both email and password or not
    if (!email || !password) {
        res.status(400).json({ error: "fill the data properly" });
    }

    try {
        const userlogin = await Examiner.findOne({ email: email });//first email is from database and second is filled by user

        //checking if the user with entered email id exists in database or not

        if (userlogin) {
            //if user exists in database

            //now, comparing password entered by user with the password present in database
            const ismatch = await bcrypt.compare(password, userlogin.password);


            if (!ismatch) {
                res.status(400).json({ error: "invalid details" })
            }
            else {
               //sending data which is fetched from database to frontend to show different pop_ups(toast)
                res.status(201).json(userlogin);
            }

        }
        else {
            res.status(400).json({ error: "user not exists" })
        }
    }
    catch (err) {
        res.status(400).json({ error: "Invalid details" });
    }
})




module.exports = router;
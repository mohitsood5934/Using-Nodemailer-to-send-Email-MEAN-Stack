var express = require("express");
var nodemailer = require('nodemailer');
var config = require("../config");
var router = express.Router();

router.post("/sendEmail", function (req, res) {
    var data= req.body.email;
    console.log(data.name)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.myEmail, //enter your gmail account e.g xyz@gmail.com
            pass: config.password //your gmail password
        }
    });
    var mailOptions = {
        from: config.myEmail,  //enter your gmail account e.g xyz@gmail.com
        to:config.myEmail,   //receiver"s gmail address or your email address
        subject: 'Contact Details',
        html:`<h1>Contact details</h1>
        <h2> Name:${data.name} </h2><br>
        <h2> Email:${data.email} </h2><br>
        <h2> Phone Number:${data.mobileNumber} </h2><br>
        <h2> Message:${data.message} </h2><br>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json(error)
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.json({msg:"Email sent successfully"})
        }
    });
})

module.exports = router;
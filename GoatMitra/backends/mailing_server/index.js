const express = require('express');

const app = express();
require('dotenv').config();
app.use(express.json());
const nodemailer = require('nodemailer');

const auth = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 465,
    auth: {
       user: process.env.MAIL_USER,
       pass: process.env.MAIL_PASS
    }
 });

 app.post('/mail', (req, res) => {
    const { name, address, issue } = req.body; 
    const receiver = {
       from: process.env.MAIL_USER,
       to: process.env.MAIL_ORGANIZATION,
       subject: `Goat Issue Request - ${name} `,
       text: `Address: ${address} \n\n  ${issue} `
    };
    auth.sendMail(receiver, (err, emailResponse) => {
       if (err) {
          console.log(err);
          res.status(500).send("Error sending email");
       } else {
          console.log("Email sent successfully");
          res.status(200).send("Email sent successfully");
       }
    });
 });



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



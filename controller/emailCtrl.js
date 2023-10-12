const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");


const sendEmail = asyncHandler(async (data,req,res) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        secure: true,
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MP,
        }
      });
      
        const info = await transporter.sendMail({
          from: '"Hey 👻" <foo@gmail.com>', // sender address
          to: data.to, // list of receivers
          subject: data.subject, // Subject line
          text: data.text, // plain text body
          html: data.html, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }
);



module.exports= sendEmail;
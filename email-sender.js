const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
const nodemailer = require("nodemailer")
require("dotenv").config()
async function sender(to){
    try {
        console.log(process.env)
    
        const transporter = nodemailer.createTransport({
            
                host: process.env.SERVER ,
                port: process.env.PORT ,
                auth : {
                    user : process.env.EMAIL,
                    pass :process.env.PASSWORD
                }
            }

        )
        const option = {
            to :to,
            subject :"testin nodemailer" ,
            html : `<p>Hello ${to}</p>
          `
         
        }
transporter.sendMail(option,(error,info)=>{
    if (error){
        console.log(error)
    }else{
        console.log('email sent ', info.response);
        return info
    }
})
        
    } catch (error) {
        console.log(error)
        
    }
} 


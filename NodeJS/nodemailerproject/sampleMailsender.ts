var nodemailer = require('nodemailer');
let fs = require('fs');

async function sendEmail2()
{
     var transporter = nodemailer.createTransport({
        service:"servicename",
        host: 'hostname',
        port: 465,
        secure:true,
        auth: {
          user: 'username@domain.com',
          pass: "password"
        },
        tls:{
            rejectUnauthorized:false
        }
      });
      // verify connection configuration
      transporter.verify(function(error:any, success:any) {
          if (error) {
              console.log("error: Server is not connected");
              console.log(error);
          } else {
              console.log('Server is ready to take our messages');
          }
      });
      var mailOptions = {
        from: 'username@domain.com',
        to: 'username@domain.com',
        subject: 'Testing Node Mailer COnfiguration',
        text: "test"
      }
      transporter.sendMail(mailOptions, function(error:any, info:any){
        if (error) {
          console.log("Error :");
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

sendEmail2();
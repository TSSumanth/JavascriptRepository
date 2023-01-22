var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var filesystem = require('fs');
var html=require('./htmlgenerater');
console.log(html.htmlstring)
var readHTMLFile = async function(path:any, callback:any) {
  filesystem.readFile(path, {encoding: 'utf-8'}, function (err:Error, html:any) {
      if (err) {
          throw err;
          callback(err);
      }
      else {
          callback(null, html);
      }
  });
};

async function sendEmail()
{
     var transporter = nodemailer.createTransport(smtpTransport({
        service:"test",
        host: 'test',
        port: 465,
        secure:true,
        auth: {
          user: 'email.gmail.com',
          pass: "passwrd"
        },
        tls:{
            rejectUnauthorized:false
        }
      }));
      // verify connection configuration
      transporter.verify(function(error:any, success:any) {
          if (error) {
              console.log("error: Server is not connected");
              console.log(error);
          } else {
              console.log('Server is ready to take our messages');
          }
      });
      
      console.log(html.htmlstring);
      var mailOptions = {
        from: 'email.gmail.com',
        to: 'email.gmail.com',
        subject: 'Testing Node Mailer Configuration',
        text: "test",
        html: html.htmlstring
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

sendEmail();

var nodemailer = require('nodemailer');

async function sendEmail() {
    var transporter = nodemailer.createTransport({
        name: "gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'GMIALID',
            pass: "PASSWORD_FROM_APP_PASSWORDS_IN_GOOGLEACCOUNT_SETTINGS"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log("error: Server is not connected");
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });
    var mailOptions = {
        from: 'GMIALID',
        to: 'GMIALID',
        subject: 'Testing Node Mailer COnfiguration',
        text: "test"
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Error :");
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

sendEmail();
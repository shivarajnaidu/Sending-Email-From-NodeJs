var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'yourusername@gmail.com',
        pass: 'your password'
    }
});

var mailOptions = {
    from: 'yourusername@gmail.com',
    to: 'friend1@gmail.com, friend2@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world</b>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
    transporter.close();
});

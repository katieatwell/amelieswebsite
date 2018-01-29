// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'pat2382@yahoo.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//sgMail.send(msg);

const sendmail = (to, subject, text) => {
    let newMessage ={
        to:to,
        from:"amelieswebsite2@challenge.org",
        subject:subject,
        text:text
    };
    sgMail.send(newMessage);
    console.log('sendmail function finished')
}
module.exports=sendmail;
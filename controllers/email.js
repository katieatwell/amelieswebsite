const sendmail=require("./../email_setup/mailer.js");

module.exports = {
  send: function(req, res) {
    console.log(process.env.SENDGRID_API_KEY);
    sendmail(req.body.email, req.body.subject, req.body.text)
    console.log("email: "+req.body.email+"   subject: " +req.body.subject+"     text: " +req.body.text);
    res.json({message:"ok, tried to send"})
  },
}
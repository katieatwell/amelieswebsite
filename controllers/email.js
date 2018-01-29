const sendmail=require("./../email_setup/mailer.js");

module.exports = {
  send: function(req, res) {
    sendmail(req.body.email, req.body.subject, req.body.text)
    console.log(req.body.email+" " +req.body.subject+" " +req.body.text);
    res.json({message:"ok, tried to send"})
  },
}
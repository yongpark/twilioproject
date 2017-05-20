// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC2a030dd4c2eefc7ace3f2f9c63495c74';
var authToken = "5d5a3358a582439bac75aa3ac3c97e95";
var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+16193180160",
    from: "+14152125938 "
}, function(err, call) {
    process.stdout.write(call.sid);
});

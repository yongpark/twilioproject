var twilio = require('twilio');

// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC2a030dd4c2eefc7ace3f2f9c63495c74';
var authToken = "your_auth_token";
var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+14155551212",
    from: "+15017250604"
}, function(err, call) {
    process.stdout.write(call.sid);
});

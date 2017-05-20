// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
const accountSid = 'AC2a030dd4c2eefc7ace3f2f9c63495c74';
const authToken = '5d5a3358a582439bac75aa3ac3c97e95';
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+14155551212',
    from: '+15017250604',
  })
  .then((call) => process.stdout.write(call.sid));

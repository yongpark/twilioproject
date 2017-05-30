import $ from 'jquery';

export const fetchCalls = () => (
  $.ajax({
    type: 'GET',
    url: `api/calls`
  })
);


export const createCall = call => (
  $.ajax({
    type: 'POST',
    url: `api/calls`,
    data: {phoneNumber: call.phoneNumber, message: call.message, date: call.date}
  }).then(() => console.log(call))
);

const accountSid = 'AC2a030dd4c2eefc7ace3f2f9c63495c74';
const authToken = '5d5a3358a582439bac75aa3ac3c97e95';
const client = require('twilio')(accountSid, authToken);

export const makeCall() => (
  client.calls.
  .create({
    url: 'http://demo.twilio.com/docs/voice.xmlhttps://handler.twilio.com/twiml/EH6b4fda028dda8f39e767fded83c6ff87?Message=',
    to: '+16193180160',
    from: '+14152125938',
  })
  .then((call) => process.stdout.write(call.sid));
)

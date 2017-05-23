import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import express from 'express';

import styles from '../assets/styles.scss';
import coolStyle from '../assets/test_file.css';

setTimeout(function () {
  console.log(styles);
  console.log(coolStyle);
}, 5000);



class Twilio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: '',
      message: '',
      date: null,
    };
  }

  buildResponse(){
    const VoiceResponse = require('twilio').twiml.VoiceResponse;
    const urlencoded = require('body-parser').urlencoded;

    const app = express();

    // Parse incoming POST params with Express middleware
    app.use(urlencoded({extended: false}));

    // Create a route that will handle Twilio webhook requests, sent as an
    // HTTP POST to /voice in our application
    app.post('/voice', (request, response) => {
      // Get information about the incoming call, like the city associated
      // with the phone number (if Twilio can discover it)
      const city = request.body.FromCity;

      // Use the Twilio Node.js SDK to build an XML response
      //edit for user input
      const twiml = new VoiceResponse();
      twiml.say({voice: 'alice'},
        `Never gonna give you up ${city}.`
      );
      twiml.play({}, 'https://demo.twilio.com/docs/classic.mp3');

      // Render the response as XML in reply to the webhook request
      response.type('text/xml');
      response.send(twiml.toString());
    });

    // Create an HTTP server and listen for requests on port 3000
    app.listen(3000);
  }

  twilioCall(){
    const accountSid = 'AC2a030dd4c2eefc7ace3f2f9c63495c74';
    const authToken = '5d5a3358a582439bac75aa3ac3c97e95';
    const client = require('twilio')(accountSid, authToken);
    //TwilioAPICall
    client.calls
      .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: '+14155551212',
        from: '+15017250604',
      })
      .then((call) => process.stdout.write(call.sid));
  }




  render(){
    return(
      <div className='appContainer'>
        <h1>
          Send yourself a wake up call!
        </h1>
        <div>
          <input type='tel' value='' className="telephoneInput" placeholder='111-222-3333'/>
        </div>
        <ul className={styles.phoneFirstRow}>
            <button className={styles.phoneNumber}>
              1
            </button>
            <button className={styles.phoneNumber}>
              2
            </button>
            <button className={styles.phoneNumber}>
              3
            </button>
        </ul>
        <ul className={styles.phoneSecondRow}>
          <button className={styles.phoneNumber}>
            4
          </button>
          <button className={styles.phoneNumber}>
            5
          </button>
          <button className={styles.phoneNumber}>
            6
          </button>
        </ul>
        <ul className={styles.phoneThird}>
          <button className={styles.phoneNumber}>
            7
          </button>
          <button className={styles.phoneNumber}>
            8
          </button>
          <button className={styles.phoneNumber}>
            9
          </button>
        </ul>
        <div className='messageInputContainer'>
          <h3>
            Enter Message
          </h3>
          <textarea className='messageInputArea'/>
        </div>
        <div className='alarmTimerContainer'>
           <input type="time"/>
           <input type='datepicker'/>
        </div>
        <input type='submit'/>
      </div>
    );
  }
}

export default Twilio;

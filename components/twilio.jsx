import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

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
    this.updateDate = this.updateDate.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }
  updateNumber(){
    return e => {
      const number = e.target.value;
      this.setState({phoneNumber: number});
      console.log(this.state);
    };
  }

  updateDate(){
    return e => {
      const date = new Date(e.target.value);
      this.setState({date: date});
      console.log(this.state);
    };
  }

  updateTime(){
    return e => {
      const time = e.target.value;
      this.setState({time: time});
      console.log(this.state);
    };
  }

  twilioCall(){
    //TwilioAPICall
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

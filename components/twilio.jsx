import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import styles from '../assets/styles.scss';



class Twilio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: '',
      message: '',
      date: null,
    };
  }
  render(){
    return(
      <div className='app-container'>
        <h1>
          Send yourself a wake up call!
        </h1>
        <div className='phone'>
          Phone
          <div className='phone-top-portion'>
          </div>
          <ul className={styles.phoneFirstRow}>
            <li className='phone-number'>
              1
            </li>
            <li className='phone-number'>
              2
            </li>
            <li className='phone-number'>
              3
            </li>
          </ul>
          <ul className='phone-second-row'>
            <li className='phone-number'>
              4
            </li>
            <li className='phone-number'>
              5
            </li>
            <li className='phone-number'>
              6
            </li>
          </ul>
          <ul className='phone-third-row'>
            <li className='phone-number'>
              7
            </li>
            <li className='phone-number'>
              8
            </li>
            <li className='phone-number'>
              9
            </li>
          </ul>
          <div className='phone-bottomportion'>
          </div>
        </div>
        <div className='message-input-containor'>
          <h3>
            Enter Message
          </h3>
          <textarea className='message-input-area'/>
        </div>
        <div className='alarm-timer-containor'>
           <input type="time"/>
           <input type='datepicker'/>
        </div>
        <input type='submit'/>
      </div>
    );
  }
}

export default Twilio;

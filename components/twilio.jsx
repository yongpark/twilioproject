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
  }
  render(){
    return(
      <div className='appContainer'>
        <h1>
          Send yourself a wake up call!
        </h1>
        <div className='phone'>
          Phone
          <div className='phoneTopPortion'>
          </div>
          <ul className={styles.phoneFirstRow}>

              <li className='phoneNumber'>
                1
              </li>
              <li className='phoneNumber'>
                2
              </li>
              <li className='phoneNumber'>
                3
              </li>
          </ul>
          <ul className='phoneSecondRow'>
            <li className='phoneNumber'>
              4
            </li>
            <li className='phoneNumber'>
              5
            </li>
            <li className='phoneNumber'>
              6
            </li>
          </ul>
          <ul className='phoneThirdRow'>
            <li className='phoneNumber'>
              7
            </li>
            <li className='phoneNumber'>
              8
            </li>
            <li className='phoneNumber'>
              9
            </li>
          </ul>
          <div className='phoneBottomPortion'>
          </div>
        </div>
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

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
      time: null,
    };
  }
  update(field){
    return e => {
      this.setState({[field]: e.currentTarget.value});
      console.log(this.state);
    };
  }


  render(){
    return(
      <div className='appContainer'>
        <h1>
          Send yourself a wake up call!
        </h1>
        <div>
          <input type='number' value={this.state.phoneNumber} className="telephoneInput" placeholder='111-222-3333' onChange={this.update('number')}/>
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
          <textarea className='messageInputArea' onChange={this.update('message')}/>
        </div>
        <div className='alarmTimerContainer'>
           <input type="time" onChange={this.update('time')}/>
           <input type='date' onChange={this.update('date')}/>
        </div>
        <input type='submit'/>
      </div>
    );
  }
}

export default Twilio;

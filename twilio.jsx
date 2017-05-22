import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

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
          <ul className='phone-first-row'>

          </ul>
          <ul className='phone-second-row'>

          </ul>
          <ul className='phone-third-row'>

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

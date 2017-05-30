import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import merge from 'lodash/merge';
import styles from '../assets/styles/styles.scss';

// setTimeout(function () {
//   console.log(styles);
// }, 5000);


const accountSid = 'AC2a030dd4c2eefc7ace3f2f9c63495c74';
const authToken = '5d5a3358a582439bac75aa3ac3c97e95';



class Twilio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedCalls: [],
      call: props.call
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.initialState = this.state.call;
    this.reset = this.reset.bind(this);
    this.makeCall = this.makeCall;
    this.timeOut = this.timeOut;
  }

  componentDidMount(){
    this.props.fetchCalls().then((result) => this.setState({savedCalls: result.calls}));
  }

  update(field){
    return e => {
      const call = merge({}, this.state.call, {
        [field]: e.target.value
      });
      this.setState({call});
    };
  }

  updatePhoneNumber(field){
    return e => {
      let newDigitString = e.target.value.toString();
      let numberString = this.state.call.phoneNumber;
      let newNumber = numberString + newDigitString;
      const call = merge({}, this.state.call, {
        [field]: newNumber
      });
      this.setState({call});
    };
  }

  updatePhoneNumberInput(field){
    return e => {
      let newDigitString = e.target.value.toString();
      const call = merge({}, this.state.call, {
        [field]: newDigitString
      });
      this.setState({call});
    };
  }


  updateDate(field){
    return e => {
      let date = e.currentTarget.value;
      let year = date.slice(0,4);
      let month = date.slice(5,7);
      let day = date.slice(8,10);
      let currentTime = this.state.call.date;
      currentTime.setYear(year);
      currentTime.setMonth(month - 1);
      currentTime.setDate(day);
      const call = merge({}, this.state.call, {
        [field]: currentTime
      });
      this.setState({call});
    };
  }

  updateTime(field){
    return e => {
      let time = e.currentTarget.value;
      let hours = time.slice(0,2);
      let minutes = time.slice(3,5);
      let currentTime = this.state.call.date;
      currentTime.setHours(hours);
      currentTime.setMinutes(minutes);
      const call = merge({}, this.state.call, {
        [field]: currentTime
      });
      this.setState({call});
    };
  }

  makeCall(){
    arguments[1](arguments[0]);
  }

  timeOut(){
    setTimeout(this.makeCall.bind(null, arguments[0], this.props.makeCall), arguments[1]);
  }

  scheduleCall(call){
    this.reset();
    let callState = call;
    let date = call.date;
    let currentDate = new Date();
    let timeDiff = date - currentDate;
    this.props.fetchCalls().then((result) => this.setState({savedCalls: result.calls})).then(this.timeOut(callState, timeDiff));
  }

  reset(){
    this.setState({call: this.initialState});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createCall(this.state.call).then(this.scheduleCall(this.state.call));
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className={styles.container}>
          <h1 className={styles.header}>
            Send yourself a wake up call!
          </h1>
          <input type='text' className={styles.telephoneInput} placeholder={this.state.call.phoneNumber} value={this.state.call.phoneNumber} onChange={this.updatePhoneNumberInput('phoneNumber')}/>
          <div className={styles.keypad}>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={1}>
              1
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={2}>
              2
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={3}>
              3
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={4}>
              4
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={5}>
              5
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={6}>
              6
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={7}>
              7
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={8}>
              8
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={9}>
              9
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={`*`}>
              *
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={0}>
              0
            </button>
            <button className={styles.key} onClick={this.updatePhoneNumber('phoneNumber')} value={'#'}>
              #
            </button>
          </div>
          <input type='text' className={styles.messageInput} value={this.state.call.message} onChange={this.update('message')}/>
          <input className={styles.dateInput} type="time" onChange={this.updateTime('date')}/>
          <input className={styles.dateInput} type='date' onChange={this.updateDate('date')}/>
          <button className={styles.scheduleCall} type='submit'>Schedule Alarm</button>
        </form>
      </div>
    );
  }
}

export default Twilio;

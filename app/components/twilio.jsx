import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import merge from 'lodash/merge';

// import styles from '../assets/styles/styles.scss';

// setTimeout(function () {
//   console.log(styles);
// }, 5000);



class Twilio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedCalls: [],
      call: props.call
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchCalls().then((result) => this.setState({savedCalls: result.calls})).then(() => console.log(this.state));
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
      console.log(this.state.call.phoneNumber);
    };
  }

  updateDate(field){
    return e => {
      const call = merge({}, this.state.call, {
        [field]: new Date(e.currentTarget.value)
      });
      this.setState({call});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.call);
    this.props.createCall(this.state.call);
  }

  render(){
    return(
      <div className='appContainer'>
        <form onSubmit={this.handleSubmit}>
        <h1>
          Send yourself a wake up call!
        </h1>
        <div>
          <input type='number' className="telephoneInput" placeholder='111-222-3333' onChange={this.updatePhoneNumber('phoneNumber')}/>
        </div>
        <ul>
            <button onClick={this.updatePhoneNumber('phoneNumber')} value={1}>
              1
            </button>
            <button onClick={this.updatePhoneNumber('phoneNumber')} value={2}>
              2
            </button>
            <button onClick={this.updatePhoneNumber('phoneNumber')} value={3}>
              3
            </button>
        </ul>
        <ul>
          <button onClick={this.updatePhoneNumber('phoneNumber')} value={4}>
            4
          </button>
          <button onClick={this.updatePhoneNumber('phoneNumber')} value={5}>
            5
          </button>
          <button onClick={this.updatePhoneNumber('phoneNumber')} value={6}>
            6
          </button>
        </ul>
        <ul>
          <button onClick={this.updatePhoneNumber('phoneNumber')} value={7}>
            7
          </button>
          <button onClick={this.updatePhoneNumber('phoneNumber')} value={8}>
            8
          </button>
          <button onClick={this.updatePhoneNumber('phoneNumber')} value={9}>
            9
          </button>
          <button onClick={this.updatePhoneNumber('phoneNumber')} value={0}>
            0
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
        <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Twilio;

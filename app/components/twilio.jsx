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
    };
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
        <h1>
          Send yourself a wake up call!
        </h1>
        <div>
          <input type='number' value={this.state.call.phoneNumber} className="telephoneInput" placeholder='111-222-3333' onChange={this.update('phoneNumber')}/>
        </div>
        <ul>
            <button onClick={this.update('phoneNumber')}>
              1
            </button>
            <button onClick={this.update('phoneNumber')}>
              2
            </button>
            <button onClick={this.update('phoneNumber')}>
              3
            </button>
        </ul>
        <ul>
          <button onClick={this.update('phoneNumber')}>
            4
          </button>
          <button onClick={this.update('phoneNumber')}>
            5
          </button>
          <button onClick={this.update('phoneNumber')}>
            6
          </button>
        </ul>
        <ul>
          <button onClick={this.update('phoneNumber')}>
            7
          </button>
          <button onClick={this.update('phoneNumber')}>
            8
          </button>
          <button onClick={this.update('phoneNumber')}>
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
        <input type='submit' onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Twilio;

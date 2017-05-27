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
      savedCalls: {},
    };
  }

  loadCallsFromServer(){

  }

  update(field){
    return e => {
      const call = merge({}, this.state.call, {
        [field]: e.target.value
      });
      this.setState({call});
      console.log(this.state);
    };
  }

  updateDate(field){
    return e => {
      const call = merge({}, this.state.call, {
        [field]: new Date(e.currentTarget.value)
      });
      this.setState({call});
      console.log(this.state);
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createCallLog(this.state.call);
  }

  render(){
    return(
      <div className='appContainer'>
        <h1>
          Send yourself a wake up call!
        </h1>
        <div>
          <input type='number' className="telephoneInput" placeholder='111-222-3333' onChange={this.update('phoneNumber')}/>
        </div>
        <ul>
            <button>
              1
            </button>
            <button>
              2
            </button>
            <button>
              3
            </button>
        </ul>
        <ul>
          <button>
            4
          </button>
          <button>
            5
          </button>
          <button>
            6
          </button>
        </ul>
        <ul>
          <button>
            7
          </button>
          <button>
            8
          </button>
          <button>
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

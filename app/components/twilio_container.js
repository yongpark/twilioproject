import {connect} from 'react-redux';
import {createCallLog} from '..//actions/twilio_actions';
import Twilio from './twilio.jsx';

const mapStateToProps = (state, ownProps) => ({
  call: {phoneNumber: '',
  message: '',
  date: null,
  time: null,}
});


const mapDispatchToProps = dispatch => ({
  createCallLog: callLog => dispatch(createCallLog(callLog))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twilio);

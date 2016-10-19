import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Navbar from '../components/Navbar.jsx';

const composer = (props, onData) => {
    onData(null, { hasUser: Meteor.user() });
};

export default composeWithTracker(composer, {}, {}, { pure: false })(Navbar);
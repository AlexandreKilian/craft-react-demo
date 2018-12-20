import 'babel-polyfill';
import ReactOnRails from 'react-on-rails';
import App from './components/Root';
import configureStore from './store/configureStore';

const appStore = configureStore;


ReactOnRails.registerStore({ appStore });
ReactOnRails.register({ App });


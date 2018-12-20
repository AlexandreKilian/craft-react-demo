import 'babel-polyfill';
import ReactOnRails from 'react-on-rails';
import App from './components/ServerRoot';
import configureStore from './store/configureStore';
if (typeof window === 'undefined') {
    global.window = {}
}
const appStore = configureStore;
ReactOnRails.registerStore({ appStore });
ReactOnRails.register({ App });


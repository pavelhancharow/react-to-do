import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

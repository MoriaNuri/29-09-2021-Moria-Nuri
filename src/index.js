import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import  App  from './App'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    {/* component from react redux-get store and with the help of context 
    know to  stream the store obj Through all the component */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



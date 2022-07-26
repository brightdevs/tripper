import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import './App.css';

function App() {
  return (
    <Provider store={store} >

    <div>
      <h1>Hello Tripper!</h1>
    </div>
    </Provider>
  );
}

export default App;

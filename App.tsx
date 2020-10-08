import React from 'react';
import { View} from 'react-native';
import {Hello} from './Component/Hello'
import { createStore,applyMiddleware } from 'redux';
import Login from "./Container/LoginScr"
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './core/index';
// import rootReducer from './core/index';
interface State {

}
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export default class App extends React.Component<State> {
 
  componentWillMount() {
  
  }
  render(){
    return (
      <Provider store={store}>
      <Login />
    </Provider>
     ) 
        
       
  }
}



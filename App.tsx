import React from 'react';
import { View} from 'react-native';
import {Hello} from './Component/Hello'
import Login from "./Container/LoginScr"
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import rootReducer from './core/index';
interface State {

}
export default class App extends React.Component<State> {
 
  componentWillMount() {
  
  }
  render(){
   
         return <Login />
       
  }
}



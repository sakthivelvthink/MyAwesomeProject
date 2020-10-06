import React from 'react';
import { View} from 'react-native';
import {Hello} from './Component/Hello'
import Login from "./Container/LoginScr"

interface State {

}
export default class App extends React.Component<State> {
 
  componentWillMount() {
  
  }
  render(){
   
         return <Login />
       
  }
}



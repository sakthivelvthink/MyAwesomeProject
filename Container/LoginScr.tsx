import React from 'react';
import {View,Button,TextInput,StyleSheet,Text} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
interface State {
  email: string;
  password: string;
  isLogined:boolean
}
export default class LoginScr extends React.Component{
  state: State = {
    email: "",
    password: "",
    isLogined:false,
  };
  handleInputChange = (text:any) => {
    this.setState({
      email: text
    })
  }
  submitClick  ()  {
    // if ((this.state.email == "krishankantsinghal") && (this.state.password == "krishankant123")) {
    //   this.setState({ isLogined: true });
    // }
    console.log("########################################");
  }
  refreshData = () => {
    console.log("download data from server placeholder");
  }
  render() {
    return (
      <View style={styles.container}>
                    <View style={styles.form}>
                      <Text testID="counter">WelCome</Text>
        <TextInput
          value={this.state.email}
          onChangeText={this.handleInputChange}
          placeholder="Email"
          testID = "email"
        />
        <TextInput
          value={this.state.password}
          onChangeText = {(text:any) => this.handleInputChange(text)}
          placeholder="Password"
          testID = "password"
          maxLength={11}
        />
        <Button title = "Submit" testID="refreshButton" onPress={this.submitClick}> Submit</Button>
        <Button
          onPress={this.refreshData}
          title="Refresh"
          color="#000000"
        />
        </View> 
        </View>);
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: "center",
      justifyContent: "space-between"
  },
  row: {
      flexDirection: 'row'
  },
  line: {
      borderBottomColor: Colors.silver,
      margin: 20,
      borderBottomWidth: 1
  },
  text_right: {
      marginRight: 'auto',
      color: Colors.red,
  },
  text_left: {
      marginLeft: 'auto'
  },
  text_center: {
      textAlign: 'center',
      margin: 8,
  },
  logo: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
  },
  form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
  }
});
// Longin Container 
/*
1. Normal login
2. face book login
3.Google Login  
4. Navigation to forgotpassword page
5. Navigation to Sign up page
*/

import * as React from "react";
import { Text, StyleSheet, View, AppState, TextInput,Button } from "react-native";


import { connect } from 'react-redux';
import AppStore from '../../core/AppStore';

import {
    addAWSTokenCall,
    showLoader,
    clearProps,
    OnchangeUserNamePassword
} from "../../core/login/actions/LoginActions";
// your Cognito Hosted UI configuration
const oauth = {
    domain: 'agrow-development-dev.auth.us-west-2.amazoncognito.com',
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'agrow://cognito',
    redirectSignOut: 'agrow://cognito',
    responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
};



interface LoginProps {
    addAWSToken: any,
    addAWSTokenResponse: any,
    showLoader: boolean,
    startLoading: any,
    clearData: any,
    changinguserNamePassword: any,
    userName: string,
    passowrd: string,
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}
interface State {
    email: string;
    password: string;
    appState: any
    user: any
    customState: any
}

class LoginScreen extends React.Component<LoginProps, State>{
    
    state: State = {
        email: "",
        password: "",
        user: null,
        customState: null,
        appState: AppState.currentState
    };
    // On changing the text of email
    emailtextChange = (email: string) => {
    };
    // On changing the of password 
    passwordTextChange = (password: string) => {
       
    };

    // On Signin Button
    handleSignInPress = () => {

    };
    // Amazon signin
    /*
    1. Validating registered users in Amazon server
    2. generate Jwt token
    3. Sneding the generated token to Agrow server to generate new token
    */
    signIn = async () => {
        console.log("the sign up out put is");
        const data = {
            password: this.state.password,
            email: this.state.email
        }
        this.props.startLoading(true)
        try {
            const user = await Auth.signIn({
                username: data.email,
                password: data.password
            });
            this.setState({ user });
            Auth.currentSession()
                .then(data => {
                    console.log(data)
                    console.log("the sign in out put is", { data });
                    var d = data.getAccessToken()
                    console.log(d.getJwtToken())
                    this.props.addAWSToken(d.getJwtToken())
                })
                .catch(err => {
                    this.props.startLoading(false)
                    console.log(err)
                });
        } catch (error) {
            this.props.startLoading(false)
            console.log('error signing:', error);
        }
    }
    // For validating the email wheather email is valid or not  
    isValidEmail = (text: any) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            console.log("Email is Correct");
            return true;
        }
    }
    
    clearState = () => {

    }
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }
   
    // Default function called before the component mount
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
    // Common function called while Changing State of the container
    _handleAppStateChange = (nextAppState: any) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            Hub.listen("auth", ({ payload: { event, data } }) => {
                switch (event) {
                    case "signIn":
                        this.setState({ user: data });
                        break;
                    case "signOut":
                        this.setState({ user: null });
                        break;
                    case "customOAuthState":
                        this.setState({ customState: data });
                }
            });
            this.props.startLoading(true)
            Auth.currentAuthenticatedUser()
                .then(user => {
                    this.parseDetails(user)
                })
                .catch(() => {
                    this.props.startLoading(false)
                    console.log("Not signed in")
                });
        }
        this.setState({ appState: nextAppState });
    }
    // function called while returning from google and face book
    parseDetails = (user: any) => {
        this.setState({ user });
        console.log('user details:', "" + this.state.user);
        this.props.addAWSToken(this.state.user.signInUserSession.accessToken.jwtToken)
        if (this.state.user = ! null) {

        }
    };
    saveAuth = async (key: String, value: String) => {
        try {
            //  await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.log(e);
        }
    };
    render() {
        
        
        return (
            <>

                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.text_center}>{strings.WELCOME_TO_LOGIN}</Text>
                        <TextInput
                            value={this.props.userName}
                            onChangeText={this.emailtextChange}
                            placeholder={strings.EMAIL_PLACEHOLDER}
                        />
                        <TextInput
                            value={this.props.passowrd}
                            onChangeText={this.passwordTextChange}
                            placeholder={strings.PASSWORD_PLACEHOLDER}
                            maxLength={11}
                        />
                        <Button label={strings.LOGIN} onPress={this.handleSignInPress} />
                    </View>
                </View>
                {this.props.showLoader &&
                    <LoaderComponenet />
                }
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: "center",
        justifyContent: "space-between"
    },
    row: {
        flexDirection: 'row'
    },
    line: {
        borderBottomColor: colors.SILVER,
        margin: 20,
        borderBottomWidth: 1
    },
    text_right: {
        marginRight: 'auto',
        color: colors.ACCENT,
        fontFamily: fonts.PoppinsExtraBold,
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

const mapStateToProps = (store: AppStore) => {
    return {
        addAWSTokenResponse: store.loginState.tokenValue,
        showLoader: store.loginState.showLoader,
        userName: store.loginState.userName,
        passowrd: store.loginState.password
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        addAWSToken: (token: String) => dispatch(addAWSTokenCall(token)),
        startLoading: (loading: boolean) => dispatch(showLoader(loading)),
        clearData: () => dispatch(clearProps()),
        changinguserNamePassword: (userName: string, password: string) => dispatch(OnchangeUserNamePassword(userName, password))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
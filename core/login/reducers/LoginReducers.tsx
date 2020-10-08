/**
 * Login Container Reducer 
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */

import { Reducer } from 'redux';
import LoginState from '../state/LoginState';
import LoginActionTypes from '../actions/LoginActionTypes';
import LoginActionTypeKeys from '../actions/LoginActionTypeKeys';

const initialState: LoginState = {
    isFetching: false,
    tokenValue: "",
    roleType: "",
    getEmpDetail: "",
    showLoading: false,
    isSuccess: false,
    payload: '',
    showLoader: false,
    userName:"",
    password:''
};

const LoginReducer: Reducer<LoginState, LoginActionTypes> = (state = initialState, action) => {
    switch (action.type) {

        case LoginActionTypeKeys.ADD_AWS_TOKEN: {
            return {
                ...state,
                tokenValue: action.responseData,

            };
        }
        case LoginActionTypeKeys.SHOW_LOADER: {
            return {
                ...state,
                showLoader: action.showLoader,

            };
        }
        case LoginActionTypeKeys.CHANGE_USERNAME_PASSWORD: {
            return {
                ...state,
                userName: action.userName,
                password: action.passWord

            };
        }
        case LoginActionTypeKeys.CLEAR_PROPS: {
            return {
                ...state,
                isFetching: false,
                tokenValue: "",
                roleType: "",
                getEmpDetail: "",
                showLoading: false,
                isSuccess: false,
                payload: '',
                showLoader: false,
                userName:"",
                password:""
            };
        }
        default:
            return state;
    }
};

export default LoginReducer;
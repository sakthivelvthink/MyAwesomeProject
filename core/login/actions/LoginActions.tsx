/**
 * Login Container Action
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */

import { ActionCreator, Dispatch } from 'redux';
import { APIUserManagement } from '../../api/APIUsersManagement';
import { ThunkAction } from 'redux-thunk';
import LoginActionTypes from './LoginActionTypes'
import LoginStore from '../state/LoginState';
import LoginActionTypeKeys from './LoginActionTypeKeys';


  export const addAWSToken = (data:any): LoginActionTypes => {
    console.log("action",data);
    return {
        type: LoginActionTypeKeys.ADD_AWS_TOKEN,
        responseData: data
    };
}
export const showLoader = (data:boolean): LoginActionTypes => {
    console.log("action",data);
    return {
        type: LoginActionTypeKeys.SHOW_LOADER,
        showLoader: data
    };
}
export const clearProps = (): LoginActionTypes => {
    return {
        type: LoginActionTypeKeys.CLEAR_PROPS,
    };
}
export const OnchangeUserNamePassword = (userName:string,password:string): LoginActionTypes => {
    return {
        type: LoginActionTypeKeys.CHANGE_USERNAME_PASSWORD,
        userName:userName,
        passWord:password
    };
}
export const addAWSTokenCall: ActionCreator<
ThunkAction<
    Promise<any>,
    LoginStore,
    null,
    LoginActionTypes
>
> = (token:String) => {
return (dispatch,get) => {
    const service = new APIUserManagement();
    console.log(JSON.stringify(token));
    console.log("neighbourhood request--------------------"+token);
    return service.getGroupList(token).then((response) => { 
        dispatch(showLoader(false));
        console.log(response);
        dispatch(addAWSToken(response));
    }).catch((error: any) => {
        dispatch(showLoader(false));
        console.log("neighbourhood response--------------------",error);
    });
}
}

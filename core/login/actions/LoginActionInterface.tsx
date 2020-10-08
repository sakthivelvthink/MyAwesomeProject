/**
 * Login Action Interface
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */

import keys from "./LoginActionTypeKeys";



export interface IAddAWSToken {
    readonly type: keys.ADD_AWS_TOKEN;
    readonly responseData: any;
}
export interface IShowLoader {
    readonly type: keys.SHOW_LOADER;
    readonly showLoader: boolean;
}
export interface IClearProps {
    readonly type: keys.CLEAR_PROPS;
}
export interface IUserNamePassword {
    readonly type: keys.CHANGE_USERNAME_PASSWORD;
    readonly userName:string;
    readonly passWord:string

}
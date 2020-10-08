/**
 * Login Action Keys for identify the action type
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy](http://192.168.1.22:8080/Kumaresan)
 */


export enum LoginActionTypeStates {
    INPROGRESS = "_INPROGRESS",
    SUCCESS = "_SUCCESS",
    FAIL = "_FAIL"
}

enum LoginActionTypeKeys {
    ADD_AWS_TOKEN = "ADD_AWS_TOKEN",
    SHOW_LOADER = "SHOW_LOADER",
    CLEAR_PROPS = "CLEAR_PROPS",
    CHANGE_USERNAME_PASSWORD = "CHANGE_USERNAME_PASSWORD"
}

export default LoginActionTypeKeys;
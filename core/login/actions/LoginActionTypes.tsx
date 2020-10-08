/**
 * Login Action Types
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy](http://192.168.1.22:8080/Kumaresan)
 */

import {
    IAddAWSToken,
    IShowLoader,
    IClearProps,
    IUserNamePassword
} from "./LoginActionInterface";


type LoginActionTypes =
 IAddAWSToken
 |IShowLoader
 |IClearProps
 |IUserNamePassword

export default LoginActionTypes;
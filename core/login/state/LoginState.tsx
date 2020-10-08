
/**
 * Login Container State Informations
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */

export default interface LoginState {
    readonly isFetching: Boolean
    readonly tokenValue: String
    readonly roleType: String
    readonly getEmpDetail: any
    readonly payload: any
    readonly showLoading: any
    readonly isSuccess: any
    readonly showLoader:boolean
    readonly userName:string
    readonly password:string
}
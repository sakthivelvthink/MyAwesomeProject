/**
 * App constant informations
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */
export class AppConstants {
    static API_BASE_URL = "https://agrow-dev.herokuapp.com/";
    static API_RESPONSE_TYPE: 'arraybuffer';
    static roleKey = {
        isAdmin: '2',
        isAppriser: '1',
        isApprise:'0'
    }
    static roleType = {isAdmin: 'isAdmin', isAppriser: 'isAppriser', isApprise:'isApprise'}
    static clientId = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`
}
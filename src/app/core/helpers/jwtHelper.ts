import { AuthHelperInterface } from './authHelper';
import { UtilitiesHelper } from './utilitesHelper';
import * as jwt from 'jsonwebtoken';

export default class JwtHelper extends UtilitiesHelper implements AuthHelperInterface {

  constructor () {
    super();
    // TODO: do something when init this helper
  }

  defaultHeader = () => ({
    // TODO: make default jwt header
  })

  getAuthHeader = () => ({
    'Authorization': `Bearer ${this.getToken()}`
  })

  /**
   * Token conditions: custom checking access token
   * @method isValidToken
   * @return {boolean}    `true` : valid token for calling API
   *                      `false`: need to refresh access_token
   */
  isValidToken(): boolean {
    /**
     * Adding conditions here
     */
    // TODO

    // Default return
    return this._verifyJWTToken().isTokenValid;
  }

  isAuthenticated() {
    const { isTokenValid } = this._verifyJWTToken();
    return isTokenValid;
  }

  isCurrentUser(uid: string) {
    const userInfo = this.getUserInfo();
    return userInfo ? uid === userInfo.uid : false;
  }

  userRole() {
    const userInfo = this.getUserInfo();
    return userInfo ? userInfo.role : undefined;
  }

  getUserInfo() {
    const { isTokenValid, token } = this._verifyJWTToken();
    if (isTokenValid) {
      return jwt.decode(token).data;
    } else {
      return null;
    }
  }

  private _verifyJWTToken() {
    const token: string | boolean = this.getToken();
    const isTokenValid: boolean = jwt.decode(token);
    if (!isTokenValid) {
      this.removeToken();
    }
    return {isTokenValid, token};
  }

}

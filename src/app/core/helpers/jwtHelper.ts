import { AuthHelperInterface } from './authHelper';

export default class JwtHelper implements AuthHelperInterface {

  constructor () {
    // TODO: do something when init this helper
  }

  defaultHeader = () => ({
    // TODO: make default jwt header
  })

  getAuthHeader = () => ({
    'Authorization': this.getToken()
  })

  getToken() {
    // TODO: get access token
    return 'xxx';
  }

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
    return true;
  }

}

import { AxiosRequestConfig } from 'axios';

export interface AuthHelperInterface {
  defaultHeader: () => {};
  getToken: () => string;
  getAuthHeader: () => {};
  isValidToken: () => boolean;
}

export default class AuthHelper<T extends AuthHelperInterface> {

  private helper: T;

  constructor(readonly Helper: new () => T) {
    // TODO: do something when init this helper
    this.helper = new Helper();
  }

  defaultHeader() {
    return this.helper.defaultHeader();
  }

  getAuthHeader() {
    return this.helper.getAuthHeader();
  }

  getToken(): string {
    return this.helper.getToken();
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
    return this.helper.isValidToken();
  }

  setAuthHeader(request: AxiosRequestConfig): Promise<AxiosRequestConfig> | AxiosRequestConfig {
    // Get and check access token
    if (this.getToken()) {
      // Check `access token` condition
      if (!this.isValidToken()) {
        return this.handleRefreshToken(request);
      }

      // Normal case: Request with authorization
      Object.assign(request.headers, this.getAuthHeader());
    }
    return request;
  }

  /**
   * Handle refresh token with current API request
   * @method handleRefreshToken
   * @param   [request] - current API request that have expired access_token or get 401 Unauthorized
   * @returns Promise<AxiosRequestConfig>
   */
  handleRefreshToken (request: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    // TODO: handle refresh token
    return null;
  }

}

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiService {

  axiosInstance: AxiosInstance;

  constructor() {
    // Init axiosInstance
    this.axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      // Common header
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'xxx' // TODO get access token from localstorage
      }
    });
    this._setInterceptors();
  }

  createURL(uri: (string | object)[]) {
    let paramsUrl;
    if (typeof uri[uri.length - 1] !== 'string') {
      paramsUrl = uri.pop();
      let url = uri.join('/');
      Object.keys(paramsUrl).forEach(x => {
        url = url.replace(`:${x}`, paramsUrl[x]);
      });
      return url;
    } else {
      return uri.join('/');
    }
  }

  get(uri: (string | object)[], params = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.get(this.createURL(uri), { params, ...moreConfigs });
      this._handleRespond(request, resolve, reject);
    });
  }

  post(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.post(this.createURL(uri), data, moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  put(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.put(this.createURL(uri), data, moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  delete(uri: (string | object)[], moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.delete(this.createURL(uri), moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  multipeGets(apiRequests: any) {
    const apiReqs = apiRequests.map((v: any) =>
    this.axiosInstance.get(v),
    );
    return new Promise((resolve, reject) => {
      axios.all(apiReqs)
        .then((resp: AxiosResponse[]) => {
          resolve(resp.map((v: any) => v.data));
        })
        .catch((err: any) => reject(err));
    });
  }

  private _handleRespond(request: any, resolve, reject) {
    return request.then((resp: AxiosResponse) => {
      resolve(resp.data);
    }).catch((err: any) => {
      reject(err);
    });
  }

  private _setInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (request: AxiosRequestConfig) => this._setAuthHeader(request),
    );
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => this._handleError(error)
    );
  }

  private async _handleError(error: AxiosError) {
    // Detect refresh Token
    if (error.isAxiosError && error.response?.status === 401) {
      const originalRequest = error.config;
      const req = await this._handleRefreshToken(originalRequest);
      return this.axiosInstance(req);
    }

    // Make error model before promise
    if (error.isAxiosError && error.response) {
      // Axios error
      return Promise.reject(error);
    } else {
      // Default | Network errors | CORS | ...
      return Promise.reject({});
    }
  }

  private _setAuthHeader(request: AxiosRequestConfig): Promise<AxiosRequestConfig> | AxiosRequestConfig {
    // TODO get access token from localstorage
    const accessToken = 'xxx';
    if (accessToken) {
      // Check `access token` condition
      if (!this._isAcceptedToken()) {
        return this._handleRefreshToken(request);
      }
      // Normal case: Request with authorization
      return this._addAuthorization(request, accessToken);
    }
    // Normal case: Request without authorization
    return request;
  }

  /**
   * Adding new Authorization token after Refresh token
   */
  private _addAuthorization(
    request: AxiosRequestConfig,
    accessToken: string = 'xxx' // TODO get access token from localstorage
  ): AxiosRequestConfig {
    request.headers['Authorization'] = accessToken;
    return request;
  }

  /**
   * Token conditions: custom checking access token
   * @method _isAcceptedToken
   * @return {boolean}
   *         `true` : accepted token for calling API
   *         `false`: need to refresh access_token
   */
  private _isAcceptedToken(): boolean {
    /**
     * Adding conditions here
     */
    // TODO

    // Default return
    return true;
  }

  /**
   * Handle refresh token with current API request
   * @method _handleRefreshToken
   * @private
   * @param   [request] - current API request that have expired access_token or get 401 Unauthorized
   * @returns Promise<AxiosRequestConfig>
   */
  private _handleRefreshToken(request: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    // TODO handle refresh token
    return null;
  }
}

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { environment } from '@config/environment';
import AuthHelper, { AuthHelperInterface } from '../helpers/authHelper';
import { ENDPOINT } from '@config/endpoint';
import { ApiService } from './api.service';
import { IUtilitiesAuth } from '../helpers/utilitesHelper';

export class AuthService extends AuthHelper {
  http = new ApiService();

  constructor() {
    super();
  }

  async signIn(body: any) {
    /* this is the default signIn,
      If you want to override it, please write the same function in specific type of auth.
    */
    try {
      const res = await this.http.post([ENDPOINT.auth.login], body);
      this.setToken(res);
      return res;
    } catch (e) {
      throw e;
    }
  }

  signOut() {
    this.removeToken();
  }
}

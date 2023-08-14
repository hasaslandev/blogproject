import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/loginModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { TokenModel } from '../Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:7250/api/auth/";

  constructor(private httpClient: HttpClient) { }

  login(LoginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", LoginModel)
  }
  isAuthenticated() {
    if (localStorage.getItem("Token")) {
      return true;
    }
    else {
      return false;
    }
  }
}

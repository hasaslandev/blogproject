import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../Models/about';
import { ListResponseModel } from '../Models/ListResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  apiUrl = "https://localhost:7250/api/";

  constructor(private httpclient: HttpClient) { }
  getAbouts(): Observable<ListResponseModel<About>> {
    return this.httpclient.get<ListResponseModel<About>>(this.apiUrl + "abouts/getall");
  }

  add(about: About): Observable<ResponseModel> {
    return this.httpclient.post<ResponseModel>(this.apiUrl + "abouts/add", about);
  }
  getById(id: number): Observable<About> {
    return this.httpclient.get<About>(this.apiUrl + "abouts/getbyid?id=" + id);
  }
  update(id: number): Observable<About> {
    return this.httpclient.post<About>(this.apiUrl + "abouts/update", id);
  }
}

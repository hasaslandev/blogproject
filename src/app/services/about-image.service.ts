import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutImage } from '../Models/aboutImage';
import { ListResponseModel } from '../Models/ListResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AboutImageService {
  apiUrl = "https://localhost:7250/api/";
  constructor(private httpclient: HttpClient) { }
  getAboutImages(): Observable<ListResponseModel<AboutImage>> {
    return this.httpclient.get<ListResponseModel<AboutImage>>(this.apiUrl + "AboutImage/getall");
  }

  add(about: AboutImage): Observable<ResponseModel> {
    return this.httpclient.post<ResponseModel>(this.apiUrl + "AboutImage/add", about);
  }
  getById(id: number): Observable<AboutImage> {
    return this.httpclient.get<AboutImage>(this.apiUrl + "AboutImage/getbyid?id=" + id);
  }
  update(id: number): Observable<AboutImage> {
    return this.httpclient.post<AboutImage>(this.apiUrl + "AboutImage/update", id);
  }
}


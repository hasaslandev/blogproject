import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';
import { ListResponseModel } from '../Models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:7250/api/Categories/getall";

  constructor(private httpclient: HttpClient) { }
  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpclient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}

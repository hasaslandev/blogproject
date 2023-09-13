import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog';
import { ListResponseModel } from '../Models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = "https://localhost:7250/api/";

  constructor(private httpclient: HttpClient) { }

  getBlogs(): Observable<ListResponseModel<Blog>> {
    let newPath = this.apiUrl + "blogs/getall"
    return this.httpclient.get<ListResponseModel<Blog>>(newPath);
  }
  getbyBlogId(blogId: number): Observable<Blog> {
    let newPath = this.apiUrl + "Blogs/getblogbyid?blogId=" + blogId
    return this.httpclient.get<Blog>(newPath);

  }

  getBlogByCategory(categoryID: number): Observable<ListResponseModel<Blog>> {
    let newPath = this.apiUrl + "Blogs/getblogbycategory?categoryId=" + categoryID
    return this.httpclient.get<ListResponseModel<Blog>>(newPath);
  }
  topTreePost(): Observable<ListResponseModel<Blog>> {
    let newPath = this.apiUrl + "blogs/toptreepost"
    return this.httpclient.get<ListResponseModel<Blog>>(newPath);
  }
  topFivePost(): Observable<ListResponseModel<Blog>> {
    let newPath = this.apiUrl + "blogs/topfivepost"
    return this.httpclient.get<ListResponseModel<Blog>>(newPath);
  }



}

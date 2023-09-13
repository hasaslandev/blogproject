import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { ResponseModel } from '../Models/responseModel';
import { Skill } from '../Models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiUrl = "https://localhost:7250/api/";

  constructor(private httpclient: HttpClient) { }
  getSkills(): Observable<ListResponseModel<Skill>> {
    return this.httpclient.get<ListResponseModel<Skill>>(this.apiUrl + "skill/getall");
  }

  add(about: Skill): Observable<ResponseModel> {
    return this.httpclient.post<ResponseModel>(this.apiUrl + "abouts/add", about);
  }
  getById(id: number): Observable<Skill> {
    return this.httpclient.get<Skill>(this.apiUrl + "abouts/getbyid?id=" + id);
  }
  update(id: number): Observable<Skill> {
    return this.httpclient.post<Skill>(this.apiUrl + "abouts/update", id);
  }
}

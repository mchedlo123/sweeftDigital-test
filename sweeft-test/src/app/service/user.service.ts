import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {CertainUser, User, UserObj} from "../user.model";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class mainService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  getAllDate(page: number, size: number): Observable<User[]> {
    const url = `${this.baseUrl}user/${page}/${size}`;
    return this.http.get<User>(url)
    .pipe(
      map(
        // @ts-ignore
        (date: User) => date.list
      )
    )
  }

  getUser(userId: number): Observable<CertainUser> {
    const url = `${this.baseUrl}user/${userId}`;
    return this.http.get<CertainUser>(url)
  }

  getFriends(userId: number, page: number, size: number): Observable<User[]> {
    const url = `${this.baseUrl}user/${userId}/friends/${page}/${size}`;
    return this.http.get<User>(url)
      .pipe(
        map(
          // @ts-ignore
          (date: User) => date.list
        )
      )
  }
}


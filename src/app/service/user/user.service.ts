import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // Node/Express API
  REST_API: string = environment.apiUrl;

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  // Get a list of all the users.
  getUsers() {
    return this.httpClient.get(`${this.REST_API}/user/all`);
  }

  // Get a single user by id.
  getUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/user/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Create a new user.
  addUser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/user/add`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Update an user by id.
  updateUser(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/user/update/${id}`;
    return this.httpClient
      .patch(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete an user by id.
  deleteUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/user/delete/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}

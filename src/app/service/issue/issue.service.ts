import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class IssueService {
  // Node/Express API
  REST_API: string = 'http://localhost:5001/app'; // TODO: replace with production api
  
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  
  // Get a list of all the issues.
  getIssues() {
    return this.httpClient.get(`${this.REST_API}/issue/all`);
  }

  // Get a single issue by id.
  getIssue(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/issue/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Create a new issue.
  addIssue(data: Issue): Observable<any> {
    let API_URL = `${this.REST_API}/issue/add`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Update an issue by id.
  updateIssue(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/issue/update/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete an issue by id.
  deleteIssue(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/issue/delete/${id}`;
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
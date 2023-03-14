import { Injectable } from '@angular/core';
import { indoorIssue } from './indoor-issue';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class IndoorIssueService {
  // Node/Express API
  REST_API: string = environment.apiUrl;

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  // Get a list of all the issues.
  getIndoorIssues() {
    console.log(`${this.REST_API}/indoorIssue/all`);
    return this.httpClient.get(`${this.REST_API}/indoorIssue/all`);
  }

  // Get a single issue by id.
  getIndoorIssue(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/issue/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Create a new issue.
  addIndoorIssue(data: indoorIssue): Observable<any> {
    let API_URL = `${this.REST_API}/indoorIssue/add`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Update an issue by id.
  updateIndoorIssue(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/indoorIssue/update/${id}`;
    return this.httpClient
      .patch(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete an issue by id.
  deleteIndoorIssue(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/indoorIssue/delete/${id}`;
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
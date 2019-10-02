import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Branch, RootObject } from '../branches/branch';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  branchesUrl = 'https://api.sample.co.uk/open-banking/v2.2/branches';  // NOT REAL - URL to web api
  // private handleError: HandleError;

  constructor(
    private http: HttpClient,
    // httpErrorHandler: HttpErrorHandler
    ) {
    // this.handleError = httpErrorHandler.createHandleError('BranchesService');
  }

  /** GET branches from the server */
  getBranches(): Observable<RootObject> {
    return this.http.get<RootObject>(this.branchesUrl)
      .pipe(
        // catchError(this.handleError('getBranches', []))
      );
  }

  /* GET branches whose name contains search term */
  searchBranches(term: string): Observable<Branch[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Branch[]>(this.branchesUrl, options)
      .pipe(
        // catchError(this.handleError<Branch[]>('searchBranches', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new branch to the database */
  addBranch (branch: Branch): Observable<Branch> {
    return this.http.post<Branch>(this.branchesUrl, branch, httpOptions)
      .pipe(
        // catchError(this.handleError('addBranch', branch))
      );
  }

  /** DELETE: delete the branch from the server */
  deleteBranch (id: number): Observable<{}> {
    const url = `${this.branchesUrl}/${id}`; // DELETE api/branches/42
    return this.http.delete(url, httpOptions)
      .pipe(
        // catchError(this.handleError('deleteBranch'))
      );
  }

  /** PUT: update the branch on the server. Returns the updated branch upon success. */
  updateBranch (branch: Branch): Observable<Branch> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Branch>(this.branchesUrl, branch, httpOptions)
      .pipe(
        // catchError(this.handleError('updateBranch', branch))
      );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
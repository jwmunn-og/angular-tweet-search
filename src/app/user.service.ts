import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser(username: string) {
    const url = `https://twitter-api-justin-munn.herokuapp.com/users/${username}`;
    return this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }

  extractData(res: Response) {
    return res.json();
  }

  handleError(error: Response | any) {
    console.log(error);
    return Observable.throw(error);
  }

}

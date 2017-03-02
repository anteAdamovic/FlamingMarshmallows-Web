import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterService {
    registerUrl: string = 'https://www.lucklycreative.com/api/register/register.php';

  constructor(private http: Http) { }

  public register(user) {
      let body = JSON.stringify(user);

      this.http.post(this.registerUrl, body)
                .map((response: any) => JSON.parse(response._body.substring(response._body.indexOf('{'), response._body.length)))
                .catch((error: any) => {console.error(error); return Observable.throw(error); });
  }
}

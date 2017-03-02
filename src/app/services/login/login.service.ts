import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
  loginURL: string = 'https://www.lucklycreative.com/api/login/login.php';

  constructor(private http: Http, private router: Router) { }

  public login(user): Observable<any> {
    let body = JSON.stringify(user);
    console.log('loginservice', body);
    return this.http.post(this.loginURL, body)
                    .map((res: any) => JSON.parse(res._body.substring(res._body.indexOf('{'), res._body.length)))
                    .catch((error: any) => {console.error(error); return Observable.throw(error); });
  }

  public logout(id: number): void {
    let body = JSON.stringify({ id: id });
    localStorage.removeItem('id');
    this.router.navigateByUrl('home');
  }
}

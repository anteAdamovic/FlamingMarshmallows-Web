import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login/login.service';
import { EventService } from '../../services/event/event.service';

import { User } from '../../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: any = {
        username: null,
        password: null
    };

    constructor(private loginService: LoginService, private router: Router, private eventService: EventService) { }

    ngOnInit() {
    }

    login(): void {
        this.loginService.login(this.user)
            .subscribe(
            (response: any) => {
                if (response.success) {
                    let user = (new User).fromObject(response);
                    localStorage.setItem('user', JSON.stringify(user));
                    this.eventService.emitLoginEvent();
                    this.router.navigateByUrl('dashboard');
                } else {

                    if(response.incorrectUsername) {
                        alert("Incorrect username.");
                    }

                    if(response.incorrectPassword) {
                        alert("Incorrect password.");
                    }

                }
            });
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'fm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInStatus: boolean = false;
  username: string;

  constructor(private router: Router, private eventService: EventService) {
      this.checkLoggedInStatus();

      this.eventService.getLoginEmitter().subscribe(
        () => {
            this.checkLoggedInStatus();
        }
      );
  }

  ngOnInit() {
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('login');
  }

  redirectToRegister(): void {
    this.router.navigateByUrl('register');
  }

  redirectToLogout(): void {
    this.loggedInStatus = false;
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }

  redirectToHome(): void {
    this.router.navigateByUrl('home');
  }

  private checkLoggedInStatus(): void {
      let user = JSON.parse(localStorage.getItem('user'));
      if(!user) {
          this.loggedInStatus = false;
      } else {
          this.loggedInStatus = true;
          this.username = user.username;
      }
  }

}

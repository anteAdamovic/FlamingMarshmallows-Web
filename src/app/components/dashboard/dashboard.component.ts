import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
    let userJSON = localStorage.getItem('user') || null;
    let user = JSON.parse(userJSON);
    if(!user) {
      this.router.navigateByUrl('unauthorized');
    }
  }

  ngOnInit() {
  }

}

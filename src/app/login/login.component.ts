import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email == 'admin')
      this.router.navigateByUrl('/home')
  }

}

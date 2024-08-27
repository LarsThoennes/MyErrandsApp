import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['dashboard'])
  }
  
  signUp() {
    this.router.navigate(['signUp'])
  }
}

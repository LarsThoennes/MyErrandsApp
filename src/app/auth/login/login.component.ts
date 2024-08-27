import { Component } from '@angular/core';
import { LoginCardComponent } from './cards/login-card/login-card.component';
import { SignUpCardComponent } from './cards/sign-up-card/sign-up-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginCardComponent, SignUpCardComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}

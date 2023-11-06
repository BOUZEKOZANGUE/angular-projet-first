import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div align="center">
      <h2>Connectez-vous</h2>
      <input type="password" name="password" [(ngModel)]="password">
      <button (click)="login()" [disabled]="password"]>Login</button>
    </div>
  `,
  styles: [
  ]
})
export default class LoginComponent {
  password!: string;

  login(){

  }

}

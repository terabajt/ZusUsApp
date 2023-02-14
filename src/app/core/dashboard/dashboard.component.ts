import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  user = this.authService.user;
  logout() {
    this.authService.logout().then(() => this.router.navigate(['/login']));
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( private _auth: AuthService) {
    this._auth.handleAuthentication();
  }

  login() {
    this._auth.login();
  }

  logout() {
    this._auth.logout();
  }

}

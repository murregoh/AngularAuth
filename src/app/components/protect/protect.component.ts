import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-protect',
  templateUrl: './protect.component.html',
  styles: []
})
export class ProtectComponent implements OnInit {

  profile: any;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      console.log( this.profile );
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        console.log( this.profile );
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {}
}

import { Component, inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginResponse, OidcSecurityService } from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  OnInit{
  title = 'MeSeek';

  router: Router = inject(Router);
  private readonly oidcSecurityService = inject(OidcSecurityService);
  loginResponse? : LoginResponse;

  constructor() {
  }

  ngOnInit() {
    this.oidcSecurityService
        .checkAuth()
        .subscribe((loginResponse: LoginResponse) => {
          const { isAuthenticated, userData, accessToken, idToken, configId } =
              loginResponse;
          if (loginResponse.isAuthenticated){
            this.loginResponse = loginResponse;
          }
          console.log(JSON.stringify(loginResponse));
        });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
        .logoff()
        .subscribe((result) => console.log(result));
  }
}

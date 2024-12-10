import { NgModule } from '@angular/core';
import {
    AbstractSecurityStorage,
    AuthModule,
    DefaultLocalStorageService,
    LogLevel,
     OpenIdConfiguration
} from 'angular-auth-oidc-client';


const OIDC_CONFIGS: OpenIdConfiguration = {
    configId: 'ihang',
    postLoginRoute: '/',
    forbiddenRoute: '/forbidden',
    unauthorizedRoute: '/unauthorized',
    logLevel: LogLevel.None,
    historyCleanupOff: false,
    authority: 'https://platform.login.testing-domain.illumina.com/platform-services-manager',
    redirectUrl: window.location.origin ,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'ihang',
    scope: 'openid profile email',
    responseType: 'code',
    // silentRenew: true,
    // silentRenewUrl: window.location.origin + '/platform-home/silent-renew.html',
    // useRefreshToken: false,
    // startCheckSession: true,
}

@NgModule({
    imports: [AuthModule.forRoot({
        config: OIDC_CONFIGS
    }),],
    exports: [],
    providers: [
        {
            provide: AbstractSecurityStorage,
            useClass: DefaultLocalStorageService,
        },
    ]
})
export class AuthConfigModule {
}

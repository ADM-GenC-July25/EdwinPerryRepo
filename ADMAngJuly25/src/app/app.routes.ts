import { Routes } from '@angular/router';
import { AdditionalComponent } from './additional-component/additional-component';
import { Home } from './home/home';
import { Bio } from './bio/bio';
import { BioDetails } from './bio-details/bio-details';
import { BioCreate } from './bio-create/bio-create';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: Home },
    { path: 'testing', component: AdditionalComponent, canActivate: [authGuard] },
    { path: 'bios', component: Bio, canActivate: [authGuard] },
    { path: 'bio/:id', component: BioDetails, canActivate: [authGuard] },
    { path: 'bio-create', component: BioCreate, canActivate: [authGuard] },
    { path: '**', redirectTo: '/login' } // Redirect any unknown routes to login
];

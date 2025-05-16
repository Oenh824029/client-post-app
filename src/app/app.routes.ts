import { Routes } from '@angular/router';
import { notAuthenticatedGuard } from './auth/guards/not-authenticated.guard';

export const routes: Routes = [
    {
        path:'auth',
        canMatch: [notAuthenticatedGuard],
        loadChildren:()=> import('./auth/auth.routes')
    },
    {
        path:'',
        loadChildren:()=>import('./front-page/front.routes'),
    }
];

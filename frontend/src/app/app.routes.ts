import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { loginGuard } from './core/guards/login-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((c) => c.About),
  },
  {
    path: 'client',
    canActivate: [ authGuard ],
    loadComponent: () => import('./pages/client/client').then((c) => c.Client),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/client/stats/stats').then((c) => c.Stats),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/client/profile/profile').then((c) => c.Profile),
      },
      {
        path: 'my-servcies',
        loadComponent: () =>
          import('./pages/client/my-services/my-services').then((c) => c.MyServices),
      },
      {
        path: 'proposals',
        loadComponent: () => import('./pages/client/proposals/proposals').then((c) => c.Proposals),
      },
      {
        path: 'post',
        loadComponent: () => import('./pages/client/post/post').then((c) => c.Post),
      },
      {
        path: 'service-proposals/:id',
        loadComponent: () =>
          import('./pages/client/service-proposals/service-proposals').then(
            (c) => c.ServiceProposals
          ),
      },
    ],
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((c) => c.Faq),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((c) => c.Services),
  },
  {
    path: 'service/:id',
    loadComponent: () => import('./pages/service/service').then((c) => c.Service),
  },
  {
    path: 'login',
    canActivate: [ loginGuard ],
    loadComponent: () => import('./pages/login/login').then((c) => c.Login),
  },
  {
    path: 'register',
    canActivate: [ loginGuard ],
    loadComponent: () => import('./pages/register/register').then((c) => c.Register),
  },
  {
    path: "**",
    redirectTo: ""
  }
];

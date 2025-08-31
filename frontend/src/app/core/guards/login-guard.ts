import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../services/user';

export const loginGuard: CanActivateFn = (route, state) => {
  const _user = inject(User);
  const _router = inject(Router)

  // console.log(_user.isLoggedIn())

  if(_user.isLoggedIn()) {
    _router.navigate(['/'])
    return false;
  } else {
    return true;
  }
};

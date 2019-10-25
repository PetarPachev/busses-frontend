import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import { StorageService } from '../services/storage.service';
import { JWT_KEY } from '../../../constants';

@Injectable()
export class UnauthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storageService.getItem(JWT_KEY)) {
      this.router.navigate(['/busses']);

      return false;
    }

    return true;
  }
}

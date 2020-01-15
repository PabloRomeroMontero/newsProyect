import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {FirebaseService} from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private auth: FirebaseService) {
  }

  canActivate(): boolean {
    return this.auth.comprobarEstarAutenticado();
  }
}

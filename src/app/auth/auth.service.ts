import {Injectable} from '@angular/core';

@Injectable()
export class AppAuthService {
  userLoggedIn;

  constructor() { }

  public login() {
    this.userLoggedIn = true;
  }

  public logout() {
    this.userLoggedIn = false;
  }

  public isAuthed() {
    return this.userLoggedIn;
  }
}

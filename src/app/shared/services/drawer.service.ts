import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawer: MatDrawer;

  constructor() {}

  setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  toggle(): void {
    this.drawer.toggle();
  }
}

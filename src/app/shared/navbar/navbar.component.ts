import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    this.drawerService.toggle();
  }
}

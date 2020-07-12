import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DrawerService } from './shared/services/drawer.service';
import { MatDrawer } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private drawerService: DrawerService){}

  
  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer);
  }
  
}

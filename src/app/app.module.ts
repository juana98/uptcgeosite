import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { CustomNgxbootstrapModule } from './custom-ngxbootstrap/custom-ngxbootstrap.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    CustomNgxbootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

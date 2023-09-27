import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { NgifExampleComponent } from './ngif-example/ngif-example.component';
import { NgswitchExampleComponent } from './ngswitch-example/ngswitch-example.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "ngfor", component: NgforExampleComponent },
  { path: "ngif", component: NgifExampleComponent },
  { path: "ngswitch", component: NgswitchExampleComponent },
  { path: "**", component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NgforExampleComponent,
    NgifExampleComponent,
    NgswitchExampleComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  pages = [
    {link: "", name: "Home"},
    {link: "ngif", name: "ngIf Example"},
    {link: "ngfor", name: "ngFor Example"},
    {link: "ngswitch", name: "ngSwitch Example"},
  ]
}

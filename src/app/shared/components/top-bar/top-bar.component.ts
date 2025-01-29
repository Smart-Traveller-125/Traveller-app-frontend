import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [NavBarComponent,RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
[x: string]: any;

}

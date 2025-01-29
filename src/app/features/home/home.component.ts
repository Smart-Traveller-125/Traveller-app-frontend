import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { FooterComponent } from "../../shared/footer/footer.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

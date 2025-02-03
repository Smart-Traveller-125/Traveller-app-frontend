import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { FooterComponent } from "../../shared/footer/footer.component";
import { GoogleMap } from '@angular/google-maps';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FooterComponent , GoogleMap,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  center: google.maps.LatLngLiteral = { lat: 6.9271, lng: 79.8612 }; // Example: Colombo
  zoom = 12;
}

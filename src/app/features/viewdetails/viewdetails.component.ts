import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.css'
})
export class ViewdetailsComponent {
  @Input() place: any;

  constructor(private router: Router) {
    // Retrieve the data from state
    const navigation = this.router.getCurrentNavigation();
    this.place = navigation?.extras.state?.['place'];
  }
  userRating: number = 0;

  // Method to handle star rating selection
  ratePlace(star: number): void {
    this.userRating = star;
  }

  // Method to submit user feedback
  submitRating(): void {
    if (this.userRating > 0) {
      console.log('User Rating:', this.userRating);
      // You can send this rating to your backend or update the place's rating
      alert(`Thank you for rating this place with ${this.userRating} stars!`);
    } else {
      alert('Please select a rating before submitting.');
    }
  }

  // Method to handle "View Hotels" button click
  viewHotels(): void {
    console.log('View Hotels clicked for:', this.place.name);

  }

  // Method to handle "View Map" button click
  viewMap(): void {
    console.log('View Map clicked for:', this.place.name);
  }
}

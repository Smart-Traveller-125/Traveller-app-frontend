// places.component.ts
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and *ngIf
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

interface Place {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  description: string;
  province: string;
  district: string;
  area: string;
}

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink], // Add FormsModule and CommonModule
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent {

  
  searchTerm: string = '';
  selectedProvince: string = '';
  selectedDistrict: string = '';
  selectedArea: string = '';

  provinces: string[] = ['Western', 'Uva', 'South', 'Balochistan'];
  districts: string[] = [];
  areas: string[] = [];

  places: Place[] = [
    {
      id: 1,
      name: 'Mountain View Point',
      imageUrl: '../../../assets/images/1.jpg',
      rating: 4.5,
      description: 'Beautiful mountain viewpoint with panoramic views of the valley.',
      province: 'Uva',
      district: 'Swat',
      area: 'Kalam'
    },
    {
      id: 1,
      name: 'Mountain View Point',
      imageUrl: '../../../assets/images/2.jpg',
      rating: 4.5,
      description: 'Beautiful mountain viewpoint with panoramic views of the valley.',
      province: 'KPK',
      district: 'Swat',
      area: 'Kalam'
    },
    {
      id: 1,
      name: 'Mountain View Point',
      imageUrl: '../../../assets/images/3.jpg',
      rating: 4.5,
      description: 'Beautiful mountain viewpoint with panoramic views of the valley.',
      province: 'KPK',
      district: 'Swat',
      area: 'Kalam'
    },
    // Add more sample places here
  ];

  filteredPlaces: Place[] = [];

  ngOnInit() {
    this.filteredPlaces = this.places;
  }

  searchPlaces() {
    this.applyFilters();
  }

  onProvinceChange() {
    // Reset dependent dropdowns
    this.selectedDistrict = '';
    this.selectedArea = '';
    this.districts = this.getDistricts(this.selectedProvince);
    this.applyFilters();
  }

  onDistrictChange() {
    // Reset area dropdown
    this.selectedArea = '';
    this.areas = this.getAreas(this.selectedDistrict);
    this.applyFilters();
  }

  getDistricts(province: string): string[] {
    // This should be replaced with actual API call or data service
    return ['District 1', 'District 2', 'District 3'];
  }

  getAreas(district: string): string[] {
    // This should be replaced with actual API call or data service
    return ['Area 1', 'Area 2', 'Area 3'];
  }

  applyFilters() {
    this.filteredPlaces = this.places.filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          place.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesProvince = !this.selectedProvince || place.province === this.selectedProvince;
      const matchesDistrict = !this.selectedDistrict || place.district === this.selectedDistrict;
      const matchesArea = !this.selectedArea || place.area === this.selectedArea;

      return matchesSearch && matchesProvince && matchesDistrict && matchesArea;


    });
  }
}

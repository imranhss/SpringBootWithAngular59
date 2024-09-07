import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel.model';
import { HotelService } from '../../service/hotel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../service/location.service';

import { Location } from '../../model/location.model';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrl: './hotel-create.component.css'
})
export class HotelCreateComponent implements OnInit {

  image: File | null = null;
  hotel: Hotel = new Hotel();
  locations: Location[] = [];
  formGroup!:FormGroup;

  constructor(
    private hotelService: HotelService,
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.loadLocations();  


   this.formGroup = this.formBuilder.group({
      name: [''],
      address: [''],
      maxPrice: [''],
      minPrice: [''],
      rating: [''],
      location: [null]  
    });


  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  loadLocations() {  
    this.locationService.getAllLocations().subscribe({
      next: res => {
        this.locations = res;
        console.log(this.locations);
      },
      error: err => {
        console.error('Error fetching locations:', err);  
      }
    });
  }

  onSubmit() {
    if (this.image) {

      const hotel: Hotel = {
        ...this.formGroup.value,
        location: { id: this.formGroup.value.location } as Location
      };
  
      this.hotelService.createHotel(hotel, this.image).subscribe({
        next: res => {
          console.log('Hotel added successfully', res);
          this.router.navigate(['/hotel']);
          console.log('Response:', res);
        },
        error: err => {
          console.error('Error adding hotel:', err);
        }
      });
    } else {
      alert('Please select an image.');
    }
  }

}

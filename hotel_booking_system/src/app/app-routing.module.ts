import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelCreateComponent } from './hotel/hotel-create/hotel-create.component';
import { HotelViewComponent } from './hotel/hotel-view/hotel-view.component';
import { RoomByHotelComponent } from './hotel/room-by-hotel/room-by-hotel.component';

const routes: Routes = [

  {path: 'hotel', component:HotelViewComponent},
  {path: 'room/:hotelId', component:RoomByHotelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

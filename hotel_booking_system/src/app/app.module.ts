import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelCreateComponent } from './hotel/hotel-create/hotel-create.component';
import { HotelViewComponent } from './hotel/hotel-view/hotel-view.component';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomViewComponent } from './room/room-view/room-view.component';
import { HomeComponent } from './home/home/home.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RoomByHotelComponent } from './hotel/room-by-hotel/room-by-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCreateComponent,
    HotelViewComponent,
    RoomCreateComponent,
    RoomViewComponent,
    HomeComponent,
    RoomByHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

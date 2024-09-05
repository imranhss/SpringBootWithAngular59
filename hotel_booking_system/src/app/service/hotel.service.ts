import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Hotel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

   baseUrl:string="http://localhost:8080/api/hotel/";

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllHotel():Observable<any>{

    return this.httpClient.get(this.baseUrl);

  }

  getHotelById(hotelId: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+hotelId);
  }









  // getLocationForStudent(): Observable<Location[]> {

  //   return this.httpClient.get<Location[]>(this.baseUrl)
  //     .pipe(
  //       catchError(this.handleError)
  //   )

  // }


  private handleError(error:any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }


  createHotel(hotel: Hotel): Observable<any> {

    return this.httpClient.post(this.baseUrl+"/save", hotel);


  }

  deleteHotel(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
    
  }

  updateHotel(id: string, hotel: Hotel): Observable<any> {

    return this.httpClient.put(this.baseUrl + "/" + id, hotel);

  }

  getById(id: string): Observable<any> {

    return this.httpClient.get(this.baseUrl + "/" + id);

  }



}

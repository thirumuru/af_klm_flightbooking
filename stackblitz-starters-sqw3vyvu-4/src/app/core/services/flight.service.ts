import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  source: string;
  destination: string;
  departureTime: string;
  duration: number;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>('assets/mock-flights.json');
  }

  searchFlights(source: string, destination: string): Observable<Flight[]> {
    return this.getFlights().pipe(
      map((flights) =>
        flights.filter(
          (f) =>
            f.source.toLowerCase() === source.toLowerCase() &&
            f.destination.toLowerCase() === destination.toLowerCase()
        )
      )
    );
  }
}

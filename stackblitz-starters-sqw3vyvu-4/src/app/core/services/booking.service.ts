import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {

  private selectedFlight: any;
  private bookingDetails: any;

  setFlight(flight: any) {
    this.selectedFlight = flight;
  }

  getFlight() {
    return this.selectedFlight;
  }

  confirmBooking(data: any) {
    this.bookingDetails = {
      ...data,
      referenceId: 'REF' + Math.floor(Math.random() * 1000000)
    };
  }

  getBooking() {
    return this.bookingDetails;
  }
}
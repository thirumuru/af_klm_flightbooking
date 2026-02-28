import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../core/services/booking.service';
//import { inject } from '@angular/core';
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './af_klm_confirmation.component.html'
})
export class AF_KLM_ConfirmationComponent {
  //private bookingService = inject(BookingService);
  booking: any;
  flight: any;
  constructor(private bookingService: BookingService) {

  this.booking = this.bookingService.getBooking();
  this.flight = this.bookingService.getFlight();
  }
}



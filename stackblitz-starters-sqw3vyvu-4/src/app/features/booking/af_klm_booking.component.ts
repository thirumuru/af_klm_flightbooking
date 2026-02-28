import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BookingService } from '../../core/services/booking.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './af_klm_booking.component.html',
  styleUrls: ['./af_klm_booking.component.scss'],
})
export class AF_KLM_BookingComponent {
form;
selectedFlight: any;
  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router
  ) {

  this.form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')   // exactly 10 digits
      ]
    ],
    passengers: [1, [Validators.required, Validators.min(1)]]
  });
}

ngOnInit() {
  this.selectedFlight = this.bookingService.getFlight();
}

  submit() {
    if (this.form.valid) {
      this.bookingService.confirmBooking(this.form.value);
      this.router.navigate(['/confirmation']);
    }
  }
}
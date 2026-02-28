import { Component, OnInit ,ChangeDetectorRef, inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService, Flight } from '../../core/services/flight.service';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from '../../shared/components/flight-card/flight-card.component';
import { BookingService } from '../../core/services/booking.service';
import { FilterSidebarComponent ,FilterOptions} from '../../shared/components/filter-sidebar/filter-sidebar.component';

@Component({
  standalone: true,
  imports: [CommonModule, FlightCardComponent,FilterSidebarComponent],
  templateUrl: './af_klm_results.component.html',
  styleUrls: ['./af_klm_results.component.scss'],
})
export class AF_KLM_ResultsComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  airlines: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private bookingService: BookingService,
    private router: Router
  ) {

  }

  ngOnInit() {
    const source = this.route.snapshot.queryParamMap.get('source')!;
    const destination = this.route.snapshot.queryParamMap.get('destination')!;
   this.flightService.searchFlights(source, destination)
      //.subscribe(data => this.flights = data);
      .subscribe(data => {
        this.flights = [...data]
        this.filteredFlights = data;
        this.airlines = [...new Set(data.map(f => f.airline))];
        this.cdr.detectChanges(); 

      });
  }
  applyFilters(filters: FilterOptions) {
    this.filteredFlights = this.flights.filter(flight => {

      // Airline Filter
      if (filters.airlines.length &&
          !filters.airlines.includes(flight.airline)) {
        return false;
      }

      // Departure Slot Filter
      if (filters.departureSlot) {
        const hour = parseInt(flight.departureTime.split(':')[0]);

        if (filters.departureSlot === 'morning' && !(hour >= 6 && hour < 12))
          return false;

        if (filters.departureSlot === 'afternoon' && !(hour >= 12 && hour < 18))
          return false;

        if (filters.departureSlot === 'evening' && !(hour >= 18 && hour < 24))
          return false;
      }

      return true;
    });

    // Sorting
    if (filters.sortBy === 'price') {
      this.filteredFlights.sort((a, b) => a.price - b.price);
    }

    if (filters.sortBy === 'duration') {
      this.filteredFlights.sort((a, b) => a.duration - b.duration);
    }
  }
  book(flight: Flight) {
    this.bookingService.setFlight(flight);
    this.router.navigate(['/booking']);
  }
}
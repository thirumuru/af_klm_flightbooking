import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterOptions {
  airlines: string[];
  departureSlot: string | null;
  sortBy: string | null;
}

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">

      <h3>Filters</h3>

      <!-- Airline Filter -->
      <div class="filter-section">
        <h4>Airlines</h4>
        <div *ngFor="let airline of availableAirlines">
          <label>
            <input
              type="checkbox"
              [value]="airline"
              (change)="onAirlineChange($event)"
            />
            {{ airline }}
          </label>
        </div>
      </div>

      <!-- Departure Slot Filter -->
      <div class="filter-section">
        <h4>Departure Time</h4>
        <label>
          <input type="radio" name="slot" value="morning"
                 (change)="onSlotChange('morning')" />
          Morning (6AM - 12PM)
        </label>
        <label>
          <input type="radio" name="slot" value="afternoon"
                 (change)="onSlotChange('afternoon')" />
          Afternoon (12PM - 6PM)
        </label>
        <label>
          <input type="radio" name="slot" value="evening"
                 (change)="onSlotChange('evening')" />
          Evening (6PM - 12AM)
        </label>
      </div>

      <!-- Sort -->
      <div class="filter-section">
        <h4>Sort By</h4>
        <select (change)="onSortChange($event)">
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="duration">Duration</option>
        </select>
      </div>

    </div>
  `,
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent {

  @Input() availableAirlines: string[] = [];
  @Output() filtersChanged = new EventEmitter<FilterOptions>();

  private selectedAirlines: string[] = [];
  private selectedSlot: string | null = null;
  private selectedSort: string | null = null;

  onAirlineChange(event: any) {
    const airline = event.target.value;

    if (event.target.checked) {
      this.selectedAirlines.push(airline);
    } else {
      this.selectedAirlines =
        this.selectedAirlines.filter(a => a !== airline);
    }

    this.emitFilters();
  }

  onSlotChange(slot: string) {
    this.selectedSlot = slot;
    this.emitFilters();
  }

  onSortChange(event: any) {
    this.selectedSort = event.target.value || null;
    this.emitFilters();
  }

  private emitFilters() {
    this.filtersChanged.emit({
      airlines: this.selectedAirlines,
      departureSlot: this.selectedSlot,
      sortBy: this.selectedSort
    });
  }
}
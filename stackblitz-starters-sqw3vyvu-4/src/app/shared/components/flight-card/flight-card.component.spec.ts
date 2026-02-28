import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightCardComponent } from './flight-card.component';
import { By } from '@angular/platform-browser';

describe('FlightCardComponent', () => {

  let component: FlightCardComponent;
  let fixture: ComponentFixture<FlightCardComponent>;

  const mockFlight = {
    airline: 'Indigo',
    flightNumber: '6E-234',
    departureTime: '08:00',
    duration: 165,
    price: 4500
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightCardComponent);
    component = fixture.componentInstance;
    component.flight = mockFlight;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should display flight details', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.textContent).toContain('Indigo');
    expect(compiled.textContent).toContain('6E-234');
    expect(compiled.textContent).toContain('4500');
  });

  it('should emit bookFlight event when button clicked', () => {
    spyOn(component.bookFlight, 'emit');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.bookFlight.emit).toHaveBeenCalledWith(mockFlight);
  });

});
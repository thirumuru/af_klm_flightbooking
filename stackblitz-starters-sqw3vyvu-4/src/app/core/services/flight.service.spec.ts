import { TestBed } from '@angular/core/testing';
import { FlightService, Flight } from './flight.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('FlightService', () => {

  let service: FlightService;
  let httpMock: HttpTestingController;

  const mockFlights: Flight[] = [
    {
      id: 1,
      airline: 'Indigo',
      flightNumber: '6E-234',
      source: 'Chennai',
      destination: 'Delhi',
      departureTime: '08:00',
      duration: 165,
      price: 4500
    },
    {
      id: 2,
      airline: 'Air India',
      flightNumber: 'AI-101',
      source: 'Chennai',
      destination: 'Mumbai',
      departureTime: '14:00',
      duration: 190,
      price: 5200
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService]
    });

    service = TestBed.inject(FlightService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch flights from mock json', () => {
    service.getFlights().subscribe(flights => {
      expect(flights.length).toBe(2);
      expect(flights).toEqual(mockFlights);
    });

    const req = httpMock.expectOne('assets/mock-flights.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockFlights);
  });

  it('should filter flights by source and destination', () => {
    service.searchFlights('Chennai', 'Delhi')
      .subscribe(flights => {
        expect(flights.length).toBe(1);
        expect(flights[0].destination).toBe('Delhi');
      });

    const req = httpMock.expectOne('assets/mock-flights.json');
    req.flush(mockFlights);
  });

});
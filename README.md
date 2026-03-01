 AF_KLM_Flight Booking Portal

A simplified Flight Search and Booking Web Application developed using **Angular 19 (Standalone Components)**.

This application allows users to:
- Search for flights
- Filter and sort results
- Book a selected flight
- View booking confirmation

---

 Live Development

Developed using **StackBlitz**  
https://stackblitz.com/edit/stackblitz-starters-sqw3vyvu?file=src%2FREADME.MD

Source Code available on GitHub.
GitHub Repository:
https://github.com/thirumuru

git clone https://github.com/thirumuru/AF_KLM_Flight_Booking_Portal.git
---

 Tech Stack

- Angular 19
- Standalone Components
- SCSS Styling
- Angular Routing (Lazy Loaded Routes)
- Route Guards
- Reactive Forms with Validations
- RxJS
- Unit Testing (Jasmine & Karma)

---

Features

Flight Search Page
- Source
- Destination
- Departure Date
- Blue Search Button
- Form validation

Search Results Page
- Displays:
  - Airline
  - Flight Number
  - Departure Time
  - Duration
  - Price
- Filters:
  - Airline (Checkbox)
  - Departure Time Slots
- Sorting:
  - Price
  - Duration
- Reusable Components:
  - FlightCardComponent
  - FilterSidebarComponent

Booking Page
- Passenger Details Form
  - Full Name
  - Email
  - Contact Number
  - Number of Passengers
- Inline validation messages
- Form validation using Reactive Forms

Confirmation Page
- Displays:
  - Selected Flight Details
  - Passenger Information
  - Generated Booking Reference ID

Route Protection

Route Guard implemented to:
- Prevent access to booking page without selecting a flight
- Protect confirmation page from direct navigation

---

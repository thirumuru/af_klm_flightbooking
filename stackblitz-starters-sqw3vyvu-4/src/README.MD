# ✈️ AF_KLM_Flight Booking Portal

A simplified Flight Search and Booking Web Application developed using **Angular 19 (Standalone Components)**.

This application allows users to:
- Search for flights
- Filter and sort results
- Book a selected flight
- View booking confirmation

---

## 🚀 Live Development

Developed using **StackBlitz**  
https://stackblitz.com/edit/stackblitz-starters-sqw3vyvu?file=src%2FREADME.MD

Source Code available on GitHub.
GitHub Repository:
https://github.com/thirumuru

---

## 🛠 Tech Stack

- Angular 19
- Standalone Components
- SCSS Styling
- Angular Routing (Lazy Loaded Routes)
- Route Guards
- Reactive Forms with Validations
- RxJS
- Unit Testing (Jasmine & Karma)

---

## 📌 Features

### 1️⃣ Flight Search Page
- Source
- Destination
- Departure Date
- Blue Search Button
- Form validation

### 2️⃣ Search Results Page
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

### 3️⃣ Booking Page
- Passenger Details Form
  - Full Name
  - Email
  - Contact Number
  - Number of Passengers
- Inline validation messages
- Form validation using Reactive Forms

### 4️⃣ Confirmation Page
- Displays:
  - Selected Flight Details
  - Passenger Information
  - Generated Booking Reference ID

---
Project structure

ak_klm_flight-booking-portal/
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   ├── flight.service.ts
│   │   │   │   └── booking.service.ts
│   │   │   ├── guards/
│   │   │   │   └── booking.guard.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── flight-card/
│   │   │   │   └── filter-sidebar/
│   │   │
│   │   ├── features/
│   │   │   ├── search/
│   │   │   ├── results/
│   │   │   ├── booking/
│   │   │   └── confirmation/
│   │   │
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   │
│   ├── assets/
│   │   └── mock-flights.json
│   └── styles.scss
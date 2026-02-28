import { Routes } from '@angular/router';
import { bookingGuard } from './core/guards/booking.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/search/af_klm_search.component')
        .then(m => m.AF_KLM_SearchComponent)
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./features/results/af_klm_results.component')
        .then(m => m.AF_KLM_ResultsComponent)
  },
  {
    path: 'booking',
    canActivate: [bookingGuard],
    loadComponent: () =>
      import('./features/booking/af_klm_booking.component')
        .then(m => m.AF_KLM_BookingComponent)
  },
  {
    path: 'confirmation',
    canActivate: [bookingGuard],
    loadComponent: () =>
      import('./features/confirmation/af_klm_confirmation.component')
        .then(m => m.AF_KLM_ConfirmationComponent)
  }
];
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './af_klm_search.component.html',
  styleUrls: ['./af_klm_search.component.scss'],
  imports: [ReactiveFormsModule],
})
export class AF_KLM_SearchComponent {
  form;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
    });
  }
  search() {
    if (this.form.valid) {
      this.router.navigate(['/results'], {
        queryParams: this.form.value,
      });
    }
  }
}

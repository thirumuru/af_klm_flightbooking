import {
  ChangeDetectionStrategy,
  Component,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// @Component({
//   selector: 'my-app',
//   standalone: true,
//   imports: [CommonModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   template: `
    
//   `,
// })
// export class App {
//   name = 'Angular';
// }

// bootstrapApplication(AppComponent, appConfig)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
// bootstrapApplication(AppComponent, appConfig, {
//   providers: [provideExperimentalZonelessChangeDetection()],
// });

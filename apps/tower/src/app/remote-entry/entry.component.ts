import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'growth-tower-tower-entry',
  template: `<growth-tower-nx-welcome></growth-tower-nx-welcome>`,
})
export class RemoteEntryComponent {}

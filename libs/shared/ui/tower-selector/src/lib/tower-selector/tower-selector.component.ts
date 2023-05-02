import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'growth-tower-selector',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './tower-selector.component.html',
  styleUrls: ['./tower-selector.component.css']
})
export class TowerSelectorComponent {
  towers = ['Tower 1', 'Tower 2'];

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas'
  ];
  onChange(event: Event) {
    console.log('------ event --->', event);
  }
}

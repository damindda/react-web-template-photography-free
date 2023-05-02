import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'growth-tower-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tower-selector.component.html',
  styleUrls: ['./tower-selector.component.css']
})
export class TowerSelectorComponent {
  towers = [
    "Tower 1",
    "Tower 2"
  ]
  onChange(event: Event) {
    console.log('------ event --->', event);
  }
}

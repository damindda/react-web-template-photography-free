import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

interface TowerSelectorDropDown {
  label: string;
  value: number;
}

@Component({
  selector: 'growth-tower-selector',
  standalone: true,
  imports: [CommonModule, MatSelectModule, FormsModule],
  templateUrl: './tower-selector.component.html',
  styleUrls: ['./tower-selector.component.css']
})

export class TowerSelectorComponent {
  towers: TowerSelectorDropDown[] = [
    {
      label: 'Tower 1',
      value: 1
    },
    { label: 'Tower 2', value: 2 }
  ];
  selectedValue!: string;
  @Output() selection = new EventEmitter<number>();

  onChange(event: MatSelectChange) {
    this.selection.emit(event.value);
  }
}

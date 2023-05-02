import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'growth-tower-growth-tray',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './growth-tray.component.html',
  styleUrls: ['./growth-tray.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrowthTrayComponent {
  @Input() items!: any;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { GrowthTray } from '@growth-tower/web/tower-service';

@Component({
  selector: 'growth-tower-growth-tray',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './growth-tray.component.html',
  styleUrls: ['./growth-tray.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrowthTrayComponent {
  @Input() growthTray!: GrowthTray;
}

import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { Slot, Tower } from '@growth-tower/web/tower-service';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'growth-tower-charts',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() set data(towerData: Tower[]) {
    const values = towerData[0];
    const { slots } = values || {};
    const slotData: string[] = [];
    const progressValuesData: number[] = [];

    if (slots) {
      slots.forEach((slot: Slot) => {
        if (slot.growthTray && slot.growthTray.growthJob) {
          const slotValues = slot.growthTray?.growthJob?.name ? slot.growthTray?.growthJob?.name : '';
          const progressValues = slot.growthTray?.growthJob?.progressPercentage
            ? slot.growthTray?.growthJob?.progressPercentage
            : 0;

          slotData.push(slotValues);
          progressValuesData.push(progressValues);
        }
      });
    }

    this.barChartData.labels = slotData;
    this.barChartData.datasets[0].data = progressValuesData;
    this.chart?.update();
  }
  public barChartLegend = true;
  public barChartPlugins = [DataLabelsPlugin];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        max: 400
      },
      y: {
        max: 100
      }
    },
    plugins: {
      legend: {
        display: true
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public barChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Series A' }]
  };
}

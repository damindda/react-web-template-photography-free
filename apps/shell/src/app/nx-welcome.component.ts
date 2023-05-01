import { Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "growth-tower-nx-welcome",
  standalone: true,
  imports: [CommonModule],
  template: `
   <h2>dashboard content</h2>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

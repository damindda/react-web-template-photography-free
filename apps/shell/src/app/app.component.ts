import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TowerUiFooterComponent } from "@growth-tower/shared/ui/footer";
import { TowerUiHeaderComponent } from "@growth-tower/shared/ui/header";
import { TowerUiTopNavComponent } from "@growth-tower/shared/ui/top-nav";

@Component({
  standalone: true,
  selector: "growth-tower-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports:[RouterModule, TowerUiFooterComponent, TowerUiHeaderComponent, TowerUiTopNavComponent]
})
export class AppComponent {
  title = "shell";
}

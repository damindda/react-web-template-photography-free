import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebUiGrowthTrayComponent } from './growth-tray.component';

describe('WebUiGrowthTrayComponent', () => {
  let component: WebUiGrowthTrayComponent;
  let fixture: ComponentFixture<WebUiGrowthTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebUiGrowthTrayComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebUiGrowthTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

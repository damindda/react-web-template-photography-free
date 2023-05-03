import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TowerSelectorComponent } from './tower-selector.component';

describe('TowerSelectorComponent', () => {
  let component: TowerSelectorComponent;
  let fixture: ComponentFixture<TowerSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TowerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

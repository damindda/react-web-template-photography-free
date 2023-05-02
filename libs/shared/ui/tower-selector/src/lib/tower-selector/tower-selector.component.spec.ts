import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiTowerSelectorComponent } from './tower-selector.component';

describe('SharedUiTowerSelectorComponent', () => {
  let component: SharedUiTowerSelectorComponent;
  let fixture: ComponentFixture<SharedUiTowerSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiTowerSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiTowerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

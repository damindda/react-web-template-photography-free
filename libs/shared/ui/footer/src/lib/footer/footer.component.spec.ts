import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TowerUiFooterComponent } from './footer.component';

describe('SharedUiFooterComponent', () => {
  let component: TowerUiFooterComponent;
  let fixture: ComponentFixture<TowerUiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerUiFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TowerUiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

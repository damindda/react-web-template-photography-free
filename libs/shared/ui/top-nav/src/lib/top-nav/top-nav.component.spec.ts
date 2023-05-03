import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TowerUiTopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TowerUiTopNavComponent;
  let fixture: ComponentFixture<TowerUiTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerUiTopNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TowerUiTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

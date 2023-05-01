import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TowerUiHeaderComponent } from './header.component';

describe('SharedUiHeaderComponent', () => {
  let component: TowerUiHeaderComponent;
  let fixture: ComponentFixture<TowerUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerUiHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TowerUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

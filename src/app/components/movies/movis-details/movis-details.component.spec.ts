import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovisDetailsComponent } from './movis-details.component';

describe('MovisDetailsComponent', () => {
  let component: MovisDetailsComponent;
  let fixture: ComponentFixture<MovisDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovisDetailsComponent]
    });
    fixture = TestBed.createComponent(MovisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

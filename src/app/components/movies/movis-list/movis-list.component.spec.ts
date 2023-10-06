import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovisListComponent } from './movis-list.component';

describe('MovisListComponent', () => {
  let component: MovisListComponent;
  let fixture: ComponentFixture<MovisListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovisListComponent]
    });
    fixture = TestBed.createComponent(MovisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

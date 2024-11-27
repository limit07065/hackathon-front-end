import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPoolComponent } from './car-pool.component';

describe('CarPoolComponent', () => {
  let component: CarPoolComponent;
  let fixture: ComponentFixture<CarPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarPoolComponent]
    });
    fixture = TestBed.createComponent(CarPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

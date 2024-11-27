import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondHubComponent } from './bond-hub.component';

describe('BondHubComponent', () => {
  let component: BondHubComponent;
  let fixture: ComponentFixture<BondHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondHubComponent]
    });
    fixture = TestBed.createComponent(BondHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

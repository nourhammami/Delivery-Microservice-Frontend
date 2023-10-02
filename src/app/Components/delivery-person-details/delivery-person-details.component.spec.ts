import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonDetailsComponent } from './delivery-person-details.component';

describe('DeliveryPersonDetailsComponent', () => {
  let component: DeliveryPersonDetailsComponent;
  let fixture: ComponentFixture<DeliveryPersonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPersonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonListComponent } from './delivery-person-list.component';

describe('DeliveryPersonListComponent', () => {
  let component: DeliveryPersonListComponent;
  let fixture: ComponentFixture<DeliveryPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPersonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

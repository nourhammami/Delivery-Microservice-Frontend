import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryPersonComponent } from './add-delivery-person.component';

describe('AddDeliveryPersonComponent', () => {
  let component: AddDeliveryPersonComponent;
  let fixture: ComponentFixture<AddDeliveryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeliveryPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

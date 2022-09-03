import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationInputComponent } from './confirmation-input.component';

describe('ConfirmationInputComponent', () => {
  let component: ConfirmationInputComponent;
  let fixture: ComponentFixture<ConfirmationInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

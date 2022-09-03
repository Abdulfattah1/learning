import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityInputComponent } from './nationality-input.component';

describe('NationalityInputComponent', () => {
  let component: NationalityInputComponent;
  let fixture: ComponentFixture<NationalityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalityInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

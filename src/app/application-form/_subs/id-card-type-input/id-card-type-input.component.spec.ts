import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardTypeInputComponent } from './id-card-type-input.component';

describe('IdCardTypeInputComponent', () => {
  let component: IdCardTypeInputComponent;
  let fixture: ComponentFixture<IdCardTypeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCardTypeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCheckboxesComponent } from './two-checkboxes.component';

describe('TwoCheckboxesComponent', () => {
  let component: TwoCheckboxesComponent;
  let fixture: ComponentFixture<TwoCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoCheckboxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

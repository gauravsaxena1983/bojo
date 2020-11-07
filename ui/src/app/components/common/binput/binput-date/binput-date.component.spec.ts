import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BInputDateComponent } from './binput-date.component';

describe('BInputDateComponent', () => {
  let component: BInputDateComponent;
  let fixture: ComponentFixture<BInputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BInputDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

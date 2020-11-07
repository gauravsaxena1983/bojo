import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BInputBoolComponent } from './binput-bool.component';

describe('BInputBoolComponent', () => {
  let component: BInputBoolComponent;
  let fixture: ComponentFixture<BInputBoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BInputBoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BInputBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

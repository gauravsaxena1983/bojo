import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BInputNumberComponent } from './binput-number.component';

describe('BInputNumberComponent', () => {
  let component: BInputNumberComponent;
  let fixture: ComponentFixture<BInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

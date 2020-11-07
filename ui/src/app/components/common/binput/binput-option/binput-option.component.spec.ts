import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BInputOptionComponent } from './binput-option.component';

describe('BInputOptionComponent', () => {
  let component: BInputOptionComponent;
  let fixture: ComponentFixture<BInputOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BInputOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BInputOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BInputRefComponent } from './binput-ref.component';

describe('BInputRefComponent', () => {
  let component: BInputRefComponent;
  let fixture: ComponentFixture<BInputRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BInputRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BInputRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

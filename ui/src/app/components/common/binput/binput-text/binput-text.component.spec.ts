import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BInputTextComponent } from './binput-text.component';

describe('BInputTextComponent', () => {
  let component: BInputTextComponent;
  let fixture: ComponentFixture<BInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BInputMultiTextComponent } from './binput-multi-text.component';

describe('BInputMultiTextComponent', () => {
  let component: BInputMultiTextComponent;
  let fixture: ComponentFixture<BInputMultiTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BInputMultiTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BInputMultiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

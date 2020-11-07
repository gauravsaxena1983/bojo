import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellTextComponent } from './binput-text.component';

describe('BCellTextComponent', () => {
  let component: BCellTextComponent;
  let fixture: ComponentFixture<BCellTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

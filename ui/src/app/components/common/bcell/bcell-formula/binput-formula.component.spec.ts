import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellFormulaComponent } from './binput-formula.component';

describe('BCellFormulaComponent', () => {
  let component: BCellFormulaComponent;
  let fixture: ComponentFixture<BCellFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

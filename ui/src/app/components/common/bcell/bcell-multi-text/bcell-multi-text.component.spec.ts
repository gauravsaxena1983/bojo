import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellMultiTextComponent } from './bcell-multi-text.component';

describe('BCellMultiTextComponent', () => {
  let component: BCellMultiTextComponent;
  let fixture: ComponentFixture<BCellMultiTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellMultiTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellMultiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

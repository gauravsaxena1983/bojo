import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellBoolComponent } from './bcell-bool.component';

describe('BCellBoolComponent', () => {
  let component: BCellBoolComponent;
  let fixture: ComponentFixture<BCellBoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellBoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

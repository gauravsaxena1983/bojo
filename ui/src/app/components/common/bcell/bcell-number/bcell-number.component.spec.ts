import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellNumberComponent } from './bcell-number.component';

describe('BCellNumberComponent', () => {
  let component: BCellNumberComponent;
  let fixture: ComponentFixture<BCellNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

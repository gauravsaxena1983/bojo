import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellDateComponent } from './bcell-date.component';

describe('BCellDateComponent', () => {
  let component: BCellDateComponent;
  let fixture: ComponentFixture<BCellDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

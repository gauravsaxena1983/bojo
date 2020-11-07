import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellSelectComponent } from './binput-select.component';

describe('BCellSelectComponent', () => {
  let component: BCellSelectComponent;
  let fixture: ComponentFixture<BCellSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

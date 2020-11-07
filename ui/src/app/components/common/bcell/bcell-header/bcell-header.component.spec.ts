import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellHeaderComponent } from './bcell-header.component';

describe('BCellHeaderComponent', () => {
  let component: BCellHeaderComponent;
  let fixture: ComponentFixture<BCellHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

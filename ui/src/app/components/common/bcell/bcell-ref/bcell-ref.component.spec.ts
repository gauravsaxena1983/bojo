import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellRefComponent } from './bcell-ref.component';

describe('BCellRefComponent', () => {
  let component: BCellRefComponent;
  let fixture: ComponentFixture<BCellRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

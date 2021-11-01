import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCellUniqueComponent } from './binput-unique.component';

describe('BCellUniqueComponent', () => {
  let component: BCellUniqueComponent;
  let fixture: ComponentFixture<BCellUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCellUniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCellUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

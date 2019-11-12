import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCallsComponent } from './two-calls.component';

describe('TwoCallsComponent', () => {
  let component: TwoCallsComponent;
  let fixture: ComponentFixture<TwoCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestFilterComponent } from './latest-filter.component';

describe('LatestFilterComponent', () => {
  let component: LatestFilterComponent;
  let fixture: ComponentFixture<LatestFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

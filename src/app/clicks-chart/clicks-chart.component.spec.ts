import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicksChartComponent } from './clicks-chart.component';

describe('ClicksChartComponent', () => {
  let component: ClicksChartComponent;
  let fixture: ComponentFixture<ClicksChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicksChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClicksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

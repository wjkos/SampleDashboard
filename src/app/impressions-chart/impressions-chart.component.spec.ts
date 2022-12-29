import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionsChartComponent } from './impressions-chart.component';

describe('ImpressionsChartComponent', () => {
  let component: ImpressionsChartComponent;
  let fixture: ComponentFixture<ImpressionsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpressionsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpressionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

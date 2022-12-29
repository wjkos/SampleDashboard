import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionsChartComponent } from './conversions-chart.component';

describe('ConversionsChartComponent', () => {
  let component: ConversionsChartComponent;
  let fixture: ComponentFixture<ConversionsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

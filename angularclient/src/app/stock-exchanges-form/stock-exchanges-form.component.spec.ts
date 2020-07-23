import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangesFormComponent } from './stock-exchanges-form.component';

describe('StockExchangesFormComponent', () => {
  let component: StockExchangesFormComponent;
  let fixture: ComponentFixture<StockExchangesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockExchangesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangesListComponent } from './stock-exchanges-list.component';

describe('StockExchangesListComponent', () => {
  let component: StockExchangesListComponent;
  let fixture: ComponentFixture<StockExchangesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockExchangesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

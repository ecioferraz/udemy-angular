import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Investments } from '../../model/investments';
import investmentsListMock from '../../services/investments-list.mock';
import { InvestmentsListService } from '../../services/investments-list.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: InvestmentsListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(InvestmentsListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investments', () => {
    spyOn(service, 'getInvestments').and.returnValue(of(investmentsListMock));

    component.ngOnInit();

    expect(service.getInvestments).toHaveBeenCalledWith();
    expect(component.investments.length).toBe(5);
    expect(component.investments[0].name).toEqual('Banco 1');
    expect(component.investments[0].value).toEqual(100);
    expect(component.investments[4].name).toEqual('Banco 5');
    expect(component.investments[4].value).toEqual(100);
  });

  it('(I) should list investments', () => {
    spyOn(service, 'getInvestments').and.returnValue(of(investmentsListMock));

    component.ngOnInit();

    fixture.detectChanges();

    const investments =
      fixture.debugElement.nativeElement.querySelectorAll('.item-list');

    expect(investments.length).toBe(5);
    expect(investments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) savings should start with 10', () => {
    expect(component.getSavings).toEqual(10);
  });

  it('(U) wallet should start with 50', () => {
    expect(component.getWallet).toEqual(50);
  });

  it('(U) should withdraw from savings to wallet', () => {
    component.withdrawCash('10');

    expect(component.getSavings).toEqual(0);
    expect(component.getWallet).toEqual(60);
  });

  it('(U) should deposit from wallet to savings', () => {
    component.depositCash('10');

    expect(component.getSavings).toEqual(20);
    expect(component.getWallet).toEqual(40);
  });

  it('(U) should not withdraw from savings to wallet', () => {
    expect(component.withdrawCash('1o')).not.toBeTruthy();

    expect(component.getSavings).toEqual(10);
    expect(component.getWallet).toEqual(50);
  });

  it('(U) should not deposit from wallet to savings', () => {
    expect(component.depositCash('1o')).not.toBeTruthy();

    expect(component.getSavings).toEqual(10);
    expect(component.getWallet).toEqual(50);
  });

  it('(I) should deposit from wallet to savings', () => {
    const element = fixture.debugElement.nativeElement;

    element.querySelector('#deposit-input').value = '10';
    element.querySelector('#deposit-btn').click();

    fixture.detectChanges();

    expect(element.querySelector('#savings').textContent).toEqual(
      'Poupança: R$ 20,00',
    );
    expect(element.querySelector('#wallet').textContent).toEqual(
      'Carteira: R$ 40,00',
    );
  });

  it('(I) should not withdraw from savings to wallet', () => {
    const element = fixture.debugElement.nativeElement;

    element.querySelector('#withdraw-input').value = '10';
    element.querySelector('#withdraw-btn').click();

    fixture.detectChanges();

    expect(element.querySelector('#savings').textContent).toEqual(
      'Poupança: R$ 0,00',
    );
    expect(element.querySelector('#wallet').textContent).toEqual(
      'Carteira: R$ 60,00',
    );
  });
});

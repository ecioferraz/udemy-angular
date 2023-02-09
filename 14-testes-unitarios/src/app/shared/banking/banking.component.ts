import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  private savings = 10;
  private wallet = 50;

  public get getSavings(): number {
    return this.savings;
  }

  public get getWallet(): number {
    return this.wallet;
  }

  public depositCash(value: string): number | undefined {
    if (isNaN(+value) || this.wallet < +value) return;

    this.savings += +value;
    return (this.wallet -= +value);
  }

  public withdrawCash(value: string): number | undefined {
    if (isNaN(+value) || this.savings < +value) return;

    this.savings -= +value;
    return (this.wallet += +value);
  }
}

import { Component, OnInit } from '@angular/core';
import { Investments } from '../../model/investments';
import { InvestmentsListService } from '../../services/investments-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investments: Investments[] = [];

  constructor(private investmentsListService: InvestmentsListService) {}

  ngOnInit(): void {
    this.investmentsListService.getInvestments().subscribe({
      next: (investments) => (this.investments = investments),
      error: (error) => error,
    });
  }
}

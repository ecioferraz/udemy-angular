import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public emitSearch = new EventEmitter<string>();

  public setSearch(value: string) {
    this.emitSearch.emit(value);
  }
}

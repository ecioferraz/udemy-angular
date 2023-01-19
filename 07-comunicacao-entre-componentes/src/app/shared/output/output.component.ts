import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Output()
  public sendItem = new EventEmitter();

  public list: { age: number; name: string }[] = [
    { age: 31, name: 'Fulano' },
    { age: 36, name: 'Sicrano' },
    { age: 26, name: 'Beltrano' },
  ];

  public getItem(i: number) {
    this.sendItem.emit(this.list[i]);
  }
}

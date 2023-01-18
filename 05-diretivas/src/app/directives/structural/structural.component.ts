import { Component, Input, OnInit } from '@angular/core';

type Item = { age: number; name: string };

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  public destroy = true;
  public destroyOnClick = false;
  public list: Item[] = [
    { age: 30, name: 'Fulano' },
    { age: 25, name: 'Ciclano' },
    { age: 35, name: 'Beltrano' },
  ];
  @Input()
  public name!: string;

  ngOnInit(): void {
    setInterval(() => {
      this.destroy = !this.destroy;
    }, 2000);
  }

  public onClick() {
    this.destroyOnClick = !this.destroyOnClick;
  }

  public addToList(item: Item) {
    this.list.push(item);
  }

  public removeFromList(i: number) {
    this.list.splice(i, 1);
  }
}

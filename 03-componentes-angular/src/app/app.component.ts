import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destroy" title="Hello, World!"></app-title>
  {{value}}
  <button (click)="add()">Add</button>
  <br>
  <button (click)="destroyComponent()">destroy component</button>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent
  implements
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnDestroy,
    OnInit
{
  public destroy = true;
  public value = 1;

  constructor() {}
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public add(): number {
    return (this.value += 1);
  }

  public destroyComponent() {
    this.destroy = !this.destroy;
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  public date = new Date();
  public height = '20px';
  public list: { name: string }[] = [];
  public name!: string;
  public value = true;

  ngOnInit(): void {
    setInterval(() => {
      this.value = !this.value;
      this.height === '20px' ? (this.height = '50px') : (this.height = '20px');
    }, 2000);
  }

  public saveItem() {
    this.list.push({ name: this.name });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import getRouteParams from 'src/app/helpers/getRouteParams';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public formData = this.formBuilder.group({ email: [''], password: [''] });
  public id = getRouteParams('id');

  constructor(private formBuilder: FormBuilder) {}
}

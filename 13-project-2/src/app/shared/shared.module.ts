import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ListComponent, SearchComponent],
  exports: [HeaderComponent, ListComponent, SearchComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
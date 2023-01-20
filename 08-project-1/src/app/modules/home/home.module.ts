import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoButtonComponent } from './components/add-todo-button/add-todo-button.component';
import { DeleteAllButtonComponent } from './components/delete-all-button/delete-all-button.component';
import { HeaderComponent } from './components/header/header.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AddTodoButtonComponent,
    DeleteAllButtonComponent,
    HeaderComponent,
    TextInputComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}

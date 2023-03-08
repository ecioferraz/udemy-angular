import { Component, DoCheck } from '@angular/core';
import TaskList from '../../model/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: TaskList[] = this.getFromLocalStorage();

  ngDoCheck() {
    this.taskList.sort((first, last) => +first.checked - +last.checked);
    this.setToLocalStorage();
  }

  public deleteTask(i: number) {
    this.taskList.splice(i, 1);
  }

  public deleteAllTasks() {
    const confirm = window.confirm('Are you sure you wanna delete all tasks?');
    if (confirm) this.taskList = [];
  }

  public setEmitTask(task: string) {
    this.taskList.push({ checked: false, task });
  }

  public checkEmptyTask(task: string, i: number) {
    if (!task.length) {
      const confirm = window.confirm('Empty task, would you like to delete it?');

      if (confirm) this.deleteTask(i);
    }
  }

  private getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks') || '[]')
  }

  private setToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}

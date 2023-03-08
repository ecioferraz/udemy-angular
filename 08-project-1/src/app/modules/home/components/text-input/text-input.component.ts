import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Output() public emitTask = new EventEmitter();

  public task = '';

  public addTask() {
    const task = this.task.trim();

    if (task) this.emitTask.emit(task);

    this.task = '';
  }
}

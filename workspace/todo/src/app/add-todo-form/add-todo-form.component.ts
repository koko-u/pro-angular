import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoFormComponent implements OnInit {
  inputText = new FormControl<string>('')

  @Output()
  add = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    const value = this.inputText.value

    if (value) {
      this.add.emit(value)
      this.inputText.reset()
    }
  }
}

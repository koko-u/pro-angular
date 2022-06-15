import { Component } from '@angular/core'
import { TodoItem } from './models/todo-item.model'
import { TodoList } from './models/todo-list.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private list: TodoList
  private showCompletedItems: boolean = false

  get username(): string {
    return this.list.user
  }
  get itemCount(): number {
    return this.list.items.reduce(
      (acc, item) => (item.complete ? acc : acc + 1),
      0
    )
  }
  get items(): readonly TodoItem[] {
    return this.list.items.filter(
      (item) => this.showCompletedItems || !item.complete
    )
  }

  constructor() {
    this.list = new TodoList('Bob', [
      new TodoItem('Go for run', true),
      new TodoItem('Get flowers'),
      new TodoItem('Collect tickets'),
    ])
  }

  addItem(task: string) {
    if (task === '') return

    this.list.addItem(task)
  }

  toggleItem(show: boolean) {
    this.showCompletedItems = show
  }
}

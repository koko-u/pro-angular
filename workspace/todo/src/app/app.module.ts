import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppMaterialModule } from './app-material.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { ToggleListComponent } from './toggle-list/toggle-list.component'

@NgModule({
  declarations: [AppComponent, TodoListComponent, AddTodoFormComponent, ToggleListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TodoListComponent,
    AddTodoFormComponent,
    ToggleListComponent
  ],
})
export class AppModule {}

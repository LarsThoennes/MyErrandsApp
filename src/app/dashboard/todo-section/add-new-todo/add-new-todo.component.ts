import { Component } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-add-new-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['../todo.scss']
})
export class AddNewTodoComponent {

  constructor(private dataService: DataService) {}

  addNewTodo() {
    this.dataService.changeData(true)
  }
}

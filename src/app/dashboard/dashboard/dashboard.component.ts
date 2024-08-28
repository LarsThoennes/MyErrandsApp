import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AddNewTodoComponent } from '../todo-section/add-new-todo/add-new-todo.component';
import { TodayTodosComponent } from '../todo-section/today-todos/today-todos.component';
import { NewListComponent } from '../list-section/new-list/new-list.component';
import { DataService } from '../../shared/services/data.service';
import { CommonModule } from '@angular/common';
import { AddNewTodoComponentCard } from '../../shared/components/add-new-todo/add-new-todo.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AddNewTodoComponent, TodayTodosComponent, NewListComponent, AddNewTodoComponentCard, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  addNewTodo = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(data => this.addNewTodo = data);
  }
}

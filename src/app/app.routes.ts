import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpCardComponent } from './auth/login/cards/sign-up-card/sign-up-card.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddNewTodoComponent } from './dashboard/todo-section/add-new-todo/add-new-todo.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: SignUpCardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/addTodo', component: AddNewTodoComponent },
];

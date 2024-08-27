import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject<boolean>(false);
  currentData = this.dataSource.asObservable();

  changeData(data: boolean) {
    this.dataSource.next(data);
    console.log('service funktioniert')
  }
}


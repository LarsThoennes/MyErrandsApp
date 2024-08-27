import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showBurgerMenu : boolean = false;

  openBurgerMenu() {
    if(this.showBurgerMenu) {
      this.showBurgerMenu = false;
    } else {
      this.showBurgerMenu = true;
    }
  }
}

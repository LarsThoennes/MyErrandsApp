import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-todo-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponentCard {
  choosenColor: string = '#0000ff'; // Standardfarbe auf Blau gesetzt
  colorPallet: boolean = false;
  formData = {
    title: '',
    specialTask: false,
    titleColor: '',
  };

  constructor(private dataService: DataService) {}

  closeCard() {
    this.dataService.changeData(false);
  }

  showColorPallet() {
    this.colorPallet = !this.colorPallet;
  }

  chooseColor(color: string) {
    this.choosenColor = color;
    // this.formData.titleColor = color; // Store selected color in formData
    this.colorPallet = false; // Farbpalette nach Auswahl schließen
  }

  onSubmit() {
    console.log('Form Data:', this.formData);
    // Hier kannst du die Formulardaten verarbeiten oder an den Service weitergeben
    // this.dataService.saveData(this.formData); // Beispiel für das Speichern der Daten
  }
}

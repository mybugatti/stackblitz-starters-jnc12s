import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    TableComponent,
    AsyncPipe,
    MatCardModule
  ]
})
export class AppComponent {

  displayedColumns = ['doador', 'documento', 'idade', 'tipo'];

  actionButtons = [
    { label: 'Edit', icon: 'edit' },
    { label: 'Delete', icon: 'delete' }
  ];

  valor$ = of(
    [
      {doador: 1, documento: 'Hydrogen', idade: 1.0079, tipo: 'H'},
      {doador: 2, documento: 'Helium', idade: 4.0026, tipo: 'He'},
      {doador: 3, documento: 'Lithium', idade: 6.941, tipo: 'Li'},
      {doador: 4, documento: 'Beryllium', idade: 9.0122, tipo: 'Be'},
      {doador: 5, documento: 'Boron', idade: 10.811, tipo: 'B'},
      {doador: 6, documento: 'Carbon', idade: 12.0107, tipo: 'C'},
      {doador: 7, documento: 'Nitrogen', idade: 14.0067, tipo: 'N'},
      {doador: 8, documento: 'Oxygen', idade: 15.9994, tipo: 'O'},
      {doador: 9, documento: 'Fluorine', idade: 18.9984, tipo: 'F'},
      {doador: 10, documento: 'Neon', idade: 20.1797, tipo: 'Ne'},
    ]
  );

  handleButtonClick(event: any) {
    // Handle button click here
    console.log('Button clicked:', event.button.label, 'for element:', event.element);
  }

}
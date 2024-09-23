import { Component, Output,EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, MatInputModule, CommonModule,          
    MatFormFieldModule,       
    MatButtonModule,          
    MatSelectModule,         
    MatRadioModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa:string = "";
  categoria:string = "";
  concluido: boolean =  false;
  mostrarAddTarefa : boolean = false;

  AlteraVisualizacao(valor : boolean)
  {
    this.mostrarAddTarefa = valor;
  }

  onSubmit()
  {


    if(!this.tarefa)
    {
      alert("Adicione uma tarefa");
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }
    this.onAddTask.emit(novaTarefa);

    this.tarefa = "";
    this.categoria = "";
    this.concluido =  false;


  }

  
}

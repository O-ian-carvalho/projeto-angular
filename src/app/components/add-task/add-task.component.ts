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

  @Output() onAddTask = new EventEmitter<Tarefa>(); // Emite um evento quando uma nova tarefa é adicionada.

  tarefa: string = ""; // Nome da tarefa.
  categoria: string = ""; // Categoria da tarefa.
  concluido: boolean = false; // Status de conclusão da tarefa.
  mostrarAddTarefa: boolean = false; // Controla a visibilidade do formulário de adição de tarefa.

  // Função que altera a visibilidade do formulário de adição de tarefa.
  AlteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }

  // Função chamada ao submeter o formulário.
  onSubmit() {
    // Valida se o campo tarefa está preenchido.
    if (!this.tarefa) {
      alert("Adicione uma tarefa");
      return;
    }

    // Cria um objeto representando a nova tarefa.
    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    };

    // Emite a nova tarefa para quem está ouvindo o evento.
    this.onAddTask.emit(novaTarefa);

    // Reseta os campos do formulário.
    this.tarefa = "";
    this.categoria = "";
    this.concluido = false;
  }
}

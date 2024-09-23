import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa; // Recebe a tarefa como entrada, com o tipo definido como Tarefa.
  @Output() onDeleteTask = new EventEmitter<Tarefa>(); // Emite um evento quando uma tarefa deve ser deletada.
  @Output() onToggleConcluido = new EventEmitter<Tarefa>(); // Emite um evento quando o status de conclusão da tarefa é alternado.

  faTimes = faTimes; // Atribui o ícone "times" à propriedade do componente para uso no template.

  // Função chamada para deletar a tarefa.
  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa); // Emite o evento de deleção da tarefa.
  }

  // Função chamada para alternar o status de conclusão da tarefa.
  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa); // Emite o evento de alternância de conclusão da tarefa.
  }
}

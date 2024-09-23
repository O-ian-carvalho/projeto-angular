import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tarefas: Tarefa[] = []; // Array para armazenar as tarefas.

  constructor(private taskService: TaskService) {} // Injeta o serviço de tarefas no componente.

  ngOnInit(): void {
    // Método chamado após a inicialização do componente.
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado; // Armazena as tarefas recebidas do serviço.
      console.log(dado); // Exibe as tarefas no console para depuração.
    });
  }

  // Método para deletar uma tarefa.
  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() => {
      // Filtra a lista de tarefas para remover a tarefa deletada.
      this.tarefas = this.tarefas.filter(t => t.id != tarefa.id);
    });
  }

  // Método para alternar o status de conclusão de uma tarefa.
  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido; // Inverte o status de conclusão da tarefa.
    this.taskService.updateTask(tarefa).subscribe(); // Atualiza a tarefa no serviço.
  }

  // Método para adicionar uma nova tarefa.
  addTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa); // Adiciona a nova tarefa ao array de tarefas.
    });
  }
}


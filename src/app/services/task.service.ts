import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  { Tarefa } from "../../Tarefa";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:3000/tasks"; // URL da API onde as tarefas são gerenciadas.

  constructor(private http: HttpClient) { } // Injeta o HttpClient no serviço.

  // Método para obter a lista de tarefas da API.
  getTasks(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl); // Faz uma requisição GET e retorna um Observable de um array de tarefas.
  }

  // Método para deletar uma tarefa específica.
  deleteTask(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${this.apiUrl}/${tarefa.id}`); // Faz uma requisição DELETE para a API.
  }

  // Método para atualizar uma tarefa existente.
  updateTask(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa); // Faz uma requisição PUT para atualizar a tarefa na API.
  }

  // Método para adicionar uma nova tarefa.
  addTask(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.apiUrl}`, tarefa); // Faz uma requisição POST para adicionar uma nova tarefa à API.
  }
}
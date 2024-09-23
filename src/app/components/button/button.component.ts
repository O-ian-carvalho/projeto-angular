import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = ''; // Texto a ser exibido no botão.
  @Input() color: string = ''; // Cor do botão (pode ser usada para estilos).
  @Output() btnClick = new EventEmitter(); // Emite um evento quando o botão é clicado.

  // Função chamada ao clicar no botão.
  onClick() {
    this.btnClick.emit(); // Emite o evento de clique.
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-boton',
  standalone: true,
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  imports: [IonButton]
})
export class BotonComponent  implements OnInit {
  @Input() texto: string = 'Botón';
  @Input() color: string = 'primary';
  
  constructor() { }

  ngOnInit() {}

}

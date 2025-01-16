import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding, IonAvatar, IonItem, IonLabel, IonItemOptions, IonIcon, IonItemOption } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  imports: [IonItemOption, IonIcon, IonItemOptions, IonLabel, IonItem, IonAvatar, IonItemSliding, ]

})
export class ListaComponent  implements OnInit {
  @Input() texto: string = "Tomás";
  @Input() src: string = "https://picsum.photos/200/300";
  @Output() itemDelete: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onDelete() {
    this.itemDelete.emit();
  }

}

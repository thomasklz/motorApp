import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonAvatar, IonButton } from '@ionic/angular/standalone';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonButton, IonAvatar, IonInput, IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonPage implements OnInit {
  profile:any;
  personid:any;
  constructor(private usuarioService:UsuarioService) { 
    this.personid = localStorage.getItem('id');
  }

  ngOnInit() {
    this. viewProfile();

  }
  viewProfile(){
    this.usuarioService.getOneUser(this.personid).subscribe({
      next:(data:any)=>{
        this.profile=data;
        debugger
      },
      error:(error:any)=>{
        debugger
      }
    })

  }



}

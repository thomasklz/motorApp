import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonAvatar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { UsuarioService } from '../service/usuario.service';
import { IUser } from '../interface/IUser';
import { addIcons } from 'ionicons';
import { pencil } from 'ionicons/icons';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonButton, IonAvatar, IonInput, IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonPage implements OnInit {
  profile!:IUser;
  personid:any;
  editDatos:boolean=true;
  constructor(private usuarioService:UsuarioService, private personService:PersonService) { 
    this.personid = localStorage.getItem('id');
    addIcons({ pencil });
  }

  ngOnInit() {
    this. viewProfile();

  }
  editPerfil(){
    this.editDatos = false;
  }

  viewProfile(){
    this.usuarioService.getOneUser(this.personid).subscribe({
      next:(data:IUser)=>{  
debugger
        this.profile=data.user;
      },
      error:(error:any)=>{

      }
    })
  }


updatePerson(){
  debugger
  const idp =localStorage.getItem('idp');
      this.personService.updatePerson(idp, "tomas", "vera","23","porto",987).subscribe({
        next:(data:IUser)=>{  

          this.viewProfile();
        },
        error:(error:any)=>{

        }
      })
  }
  changeImage(event:any){
    const file = event.target.files[0];
    this.personService.updateImage(this.personid, file).subscribe({
      next:(data:any)=>{  
        this.viewProfile();
        
      },
      error:(error:any)=>{

      }
    })
  }
}

import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader, IonTitle, IonToolbar, IonButton, 
  IonIcon, IonCard, IonLabel, IonItem, IonList, IonBackButton, IonButtons,
  IonAvatar,
  IonItemOption,
  IonItemOptions,
  IonItemSliding, 
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { pin, share, trash } from 'ionicons/icons';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [
    IonButtons,RouterLink, IonBackButton, IonList, IonItem, IonLabel, IonCard, IonIcon, 
    IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonAvatar,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,]
})
export class PrincipalPage implements OnInit {
  user:any;
  users:any;
  idtu:any;
  constructor( private UsuarioService:UsuarioService) { }

  ngOnInit() {
   this.user = localStorage.getItem('username');
   this.idtu = localStorage.getItem('idtu');
   this.getAllUser();
  }

  getAllUser(){
    this.UsuarioService.getAllUser().subscribe({
      next: (data:any) => {
        this.users = data.users;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  deleteUser(id:number){
    this.UsuarioService.deleteUser(id).subscribe({
      next: (data:any) => {
        this.getAllUser();
      },
      error: (error) => {
        console.log(error);
      }
      })  
  }

}

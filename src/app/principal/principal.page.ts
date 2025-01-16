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
import { pin, share, trash, mapOutline, locationOutline, busOutline, carOutline, homeOutline, briefcaseOutline, medkitOutline, addOutline } from 'ionicons/icons';
import { BotonComponent } from '../componentes/boton/boton.component';
import { ListaComponent } from '../componentes/lista/lista.component';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [BotonComponent,
    IonButtons,RouterLink, IonBackButton, IonList, IonItem, IonLabel, IonCard, IonIcon, 
    IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
  
    IonContent,
    ListaComponent,
    IonHeader,
    IonIcon,
    IonItem, 
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,]
})
export class PrincipalPage implements OnInit {
  user:any;
  users:any;
  idtu:any;
  constructor( private UsuarioService:UsuarioService) {
      addIcons({mapOutline,locationOutline,pin,share,trash,busOutline,carOutline,homeOutline,briefcaseOutline,medkitOutline,addOutline}); }

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

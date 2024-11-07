import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonInputPasswordToggle, IonHeader, IonTitle, IonToolbar, IonRouterLink, IonButton, IonCheckbox, IonLabel, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonIcon,IonInputPasswordToggle, IonLabel, IonCheckbox, IonButton, IonRouterLink, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

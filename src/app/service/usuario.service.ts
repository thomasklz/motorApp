import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  login(correo: string, password: string) {
    let datos = {
      email: correo,
      password: password,
    };
    return this.http.post('http://localhost:3000/api/login', datos);
  }

  getOneUser(id:number){
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<IUser>('http://localhost:3000/api/user/'+id, { headers: header });
  }
}

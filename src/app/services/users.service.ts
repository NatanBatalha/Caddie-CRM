import { Injectable } from '@angular/core';

import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  nome: string = 'Gustavo Horning';

  user: User = {
    name: 'Gustavo Horning',
    email: 'gustavohorning@gmail.com',
    sector: 'Tecnologia',
    role: 'Desenvolvedor Back-End Júnior'
  }




  constructor(private dataBaseStore: AngularFirestore) { }


  getAllUsers(){
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({idField: 'firebasedID'}) as Observable<any[]>;
  } //criei a primeira função aqui

  addUser(user: User){
    return this.dataBaseStore.collection('users').add(user); 
  }

  update(userId: string, user: User){
    return this.dataBaseStore.collection('users').doc(userId).update(user)
  }

  deleteUser(userId: string){
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }

}



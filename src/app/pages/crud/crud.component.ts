import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {


  dataSource: any;

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.getListUsers();

  }

  getListUsers(){
    this.usersService.getAllUsers().subscribe({
      next: (response: any) =>{
        console.log('Lista de usuários Firebase', response)
      },
      error: (err) =>{
        console.error(err);
      } 
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

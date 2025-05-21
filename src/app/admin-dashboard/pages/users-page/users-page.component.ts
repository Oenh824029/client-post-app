import { Component, inject } from '@angular/core';
import { UserTableComponent } from '../../../users/components/user-table/user-table.component';
import { UserService } from '../../../users/services/user.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-page',
  imports: [UserTableComponent , RouterLink],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {
  userService = inject(UserService);

  // retorna lista de usuarios
  userResource = rxResource({
    request: ()=>({}),
    loader: ()=>{
      return this.userService.getUsers();
    }
  });

}
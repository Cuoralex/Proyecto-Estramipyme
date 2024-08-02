import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../../../services/user.service';
import { User } from '../../../../../../models/user.model';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})


export class CreateComponent {
  constructor(private userService: UserService, private router: Router){}
  formdata: User ={
    id: 0,
    name: '',
    quantity: 0,
    price: 0

  }

  create(){
    this.userService.creat(this.formdata).subscribe({
      next: (data)=>{
        this.router.navigate(['/users-dashboard/home']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}


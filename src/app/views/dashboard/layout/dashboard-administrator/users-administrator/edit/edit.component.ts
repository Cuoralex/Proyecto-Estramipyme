import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from 'app/models/user-administrator.model';
import { UserService } from 'app/services/user-administrator.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})

export class EditComponent {
    deleteItem: any;
    constructor(
      private userService: UserService,
      private router: Router,
      private route: ActivatedRoute
    ) {}
  
    formdata: User = {
      id: 0,
      enterpriseType: '',
      enterpriseName: '',
      businessName: '',
      fullName:'',
      sector: '',
      adress: '',
      phone: 0,
      email: '',
      password: '',
      confirmPassword: '',
      rol: ''
    };
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        let id = Number(param.get('id'));
        this.getByid(id);
      });
    }
  
    getByid(id: number): void {
      this.userService.edit(id).subscribe((data) => {
        this.formdata = data;
      });
    }
  
    update(){
      this.userService.update(this.formdata).subscribe({
        next:(data)=>{
          this.router.navigate(["/dashboard-administrator/users-administrador/home"])
        },
        error: (er) =>{
          console.log(er)
        }
      })
  
    }
  }
  
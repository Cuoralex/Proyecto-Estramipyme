import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Users } from 'app/models/user-administrator.model';
import { UserService } from 'app/services/user-administrator.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})


export class CreateComponent implements OnInit {
  constructor(private userService: UserService, private router: Router){}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
this.userService.getAll().subscribe((ovalues) =>{
  ovalues.forEach((oItem)=>{
    if(oItem.id>this.formdata.id){
      this.formdata.id=oItem.id
    }
  })
  this.formdata.id++;
})

  }
  formdata: Users ={
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
  }

  create(){
    this.userService.creat(this.formdata).subscribe({
      next: (data)=>{
        this.router.navigate(['/admin/dashboard/users/home']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}


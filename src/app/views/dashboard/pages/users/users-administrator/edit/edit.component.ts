import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../../../models/user.model';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})

export class EditComponent implements OnInit {
  deleteItem: any;
    constructor(
      private userService: UserService,
      private router: Router,
      private route: ActivatedRoute
    ) {}
  
    formdata: User = {
      id: 0,
      name: '',
      quantity: 0,
      price: 0,
      
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
          this.router.navigate(["/users-administrador/home"])
        },
        error: (er) =>{
          console.log(er)
        }
      })
  
    }
  }
  
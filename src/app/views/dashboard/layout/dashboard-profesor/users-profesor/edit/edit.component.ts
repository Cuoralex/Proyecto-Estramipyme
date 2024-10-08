import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Users } from 'app/models/user-administrator.model';
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

    formdata: Users = {
      id: 0,
      TypeOfPerson: '',
      NaturalPersonName: '',
      NaturalPersonAddress: '',
      NaturalPersonPhone: 0,
      NaturalPersonEmail: '',
      NaturalPersonPassword: '',
      NaturalPersonConfirmPassword: '',
      TypeOfAdvice: '',
      TypeCompany: '',
      TypeCompanyAnother: '',
      LegalPersonName: '',
      LegalPersonCompanyName: '',
      Sector: '',
      LegalPersonAddress: '',
      LegalPersonPhone: 0,
      LegalPersonEmail: '',
      LegalPersonPassword: '',
      LegalPersonConfirmPassword: '',
      Role: '',
      Diagnosis: undefined,
      Adress: '',
      Phone: 0,
      Email: '',
      Password: '',
      ConfirmPassword: '',
      NaturalPersonTypeCompany: '',
      LegalPersonTypeCompany: '',
      NaturalPersonTypeCompanyAnother: '',
      LegalPersonTypeCompanyAnother: '',
      isActive:'',
      ProfileName: '',
      ProfileAddress: '',
      ProfilePhone: 0,
      ProfileID:0,
      ProfileCareer:'',
      ProfileSemester:'',
      ProfileEmail:'',
      ProfilePassword:'',
      ProfileConfirmPassword:'',
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
          this.router.navigate(["/dashboard/users/home"])
        },
        error: (er) =>{
          console.log(er)
        }
      })
  
    }
  }
  
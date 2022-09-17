import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent:any;
  model:any={}
  visible:boolean=true;
  changetype:boolean=true;
  

  constructor(private accountService:AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){

    this.accountService.register(this.model).subscribe(response =>{
      console.log(response);
    },error =>{
      console.log(error);
      this.toastr.error(error.error);
      
    });

    
    
    
  }
  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }

  cancel(){
    console.log('Cancelled');
  }

}

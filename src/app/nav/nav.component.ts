import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={}
  currentUser$!: Observable<User>;
  username :string='';
  visible:boolean=true;
  changetype:boolean=true;
 

  

 

  constructor(public accountService:AccountService,private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.currentUser$=this.accountService.currentUser$;
  }
viewpass(){
  this.visible=!this.visible;
  this.changetype=!this.changetype;
}
  
  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');

      //this.username=localStorage.getItem('user') as any

    this.username= JSON.parse(localStorage.getItem('user')as any).userName

    //  console.log(this.username.valueOf("userName"));
    this.model={};
      
      
    },error=>{
      console.log(error);
      this.toastr.error(error.error);
    
    })
  }
  logout(){
    this.router.navigateByUrl('/');
    this.accountService.logout();
   
  }
  



  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe((user: any)=>{
  //     this.loggedIn=!!user;

  //   }, error=>{
  //     console.log(error);
  //   })
  // }

}

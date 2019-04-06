import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../../service/user/user.service'
import * as $ from 'jquery'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(public router:Router, public user:UserService) { }
token:string;
data=[];
userlist=[]
searchword='';
advance:number=0;
basic:number=0;

  ngOnInit() {
    this.token=localStorage.getItem('token')
    this.getUserList()
  }
  getUserList(){
    this.user.getUserList().subscribe(response=>{
      this.userlist=response['data']['data']
      console.log(this.userlist)
      this.userlist.forEach(element => {
        if(element.service=="advance"){
            this.advance++
        }
        else{
          this.basic++;
        }
      });
    }),err=>{
      console.log(err)
    }
  }
  approve(){
    this.router.navigate(['approve'])
  } 


  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }


  
}

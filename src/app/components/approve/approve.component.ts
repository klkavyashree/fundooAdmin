import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service'
import { Router } from '@angular/router'
import * as $ from 'jquery'

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {

  constructor(public user:UserService, public router:Router) { }
questionsList=[]
parentId=[]


  ngOnInit() {
    this.getQuestions()
  }
  getQuestions(){
    this.user.getAnswer().subscribe(data=>{
      for(let i=0;i<data['data'].length;i++){
        this.questionsList.push(data['data'][i])
        console.log(data['data'][i])
      }
      this.questionsList=this.questionsList.reverse()
    })
  }
  home(){
    this.router.navigate(['dashboard'])
  }
  approve(array){
      this.user.approve(array.id).subscribe(resp=>{
        console.log(resp)
        let ind = this.questionsList.indexOf(array)
        this.questionsList.splice(ind,1)
      })
  }
  reject(array){
      this.user.reject(array.id).subscribe(resp=>{
        let ind = this.questionsList.indexOf(array)
        this.questionsList.splice(ind,1)
      })
  }


}

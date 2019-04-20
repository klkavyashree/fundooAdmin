import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-approve',
  templateUrl: './order-approve.component.html',
  styleUrls: ['./order-approve.component.scss']
})
export class OrderApproveComponent implements OnInit {
orderList=[];
list=[];
  constructor(public user:UserService, public router:Router ) { }

  ngOnInit() {
    this.getUserCartList()
  }
  getUserCartList(){
this.user.getUserCartList().subscribe(data=>{
this.list=data['data']
this.list=this.list.reverse();
  for(let i=0;i<this.list.length;i++){
    if(this.list[i].user != undefined){ 
      this.orderList.push(this.list[i])
      console.log(this.orderList)
    }
  }


})
  }
  approve(){
    this.router.navigate(['approve'])
  } 
  home(){
    this.router.navigate(['dashboard'])
  }


  approveOrder(array){
    this.user.adminApproveOrder({"cartId":array.id}).subscribe(resp=>{
      console.log(resp)
      let ind = this.orderList.indexOf(array)
      this.orderList.splice(ind,1)
    })
}
reject(array){
    this.user.adminRejectOrder({"cartId":array.id}).subscribe(resp=>{
      let ind = this.orderList.indexOf(array)
      this.orderList.splice(ind,1)
    })
}

}

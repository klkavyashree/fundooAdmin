import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpService) { }
  login(data){
    return this.http.postJSON('user/adminLogin',data)
  }
  getUserList(){
    return this.http.getHttp('user/getAdminUserList')
  }
  getAnswer(){
    return this.http.getHttp('questionAndAnswerNotes/getUnApprovedAnswer')
  }
  approve(id){
    return this.http.post('questionAndAnswerNotes/approve/'+id,'')
  }
  reject(id){
    return this.http.post('questionAndAnswerNotes/reject/'+id,'')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  static postRequest: any;
  constructor(private http:HttpClient) { }

  postJSON(url: string, body: any): any {
    url=this.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(url, body)
  }

  post(url: string, body: any): any {
    url=this.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(url, body, httpOptions)
  }


    getHttp(url){
      const httpTocken={
      headers:new HttpHeaders({
      'content-Type':'application/json',
      'Authorization':localStorage.getItem('token')
      })
      }
      return this.http.get(this.baseUrl+url,httpTocken);
      }
}

import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  username;
  adminList = [];
  namaAdmin;
  fotoAdmin;
  emailAdmin;
  id;

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if(!token){
      //redirect to login
      this.route.navigate(['/login']);
    }else{
      let header = new Headers({ "Authorization" : "Bearer "+token});
      let options = new RequestOptions({ headers : header});
      console.log(header)

      this.http.post("http://localhost:3000/api/validatetoken", {}, options)
      .subscribe(
        result => {
        
        },
        error => {
          sessionStorage.removeItem("token")
          this.route.navigate(['/login']);
        }
      );
    }
    this.loadSessionAdmin();
  }

  loadSessionAdmin(){
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    console.log("ini token "+token);

    this.username = sessionStorage.getItem("username");
    // console.log(this.username);
    this.http.get("http://localhost:3000/api/admin/", options)
    .subscribe(
      result => {
        this.adminList = result.json();
        for(let i=0; i<this.adminList.length; i++){
          if(this.adminList[i].username==this.username){
            this.namaAdmin = this.adminList[i].nama;
            this.fotoAdmin = this.adminList[i].foto;
            this.emailAdmin = this.adminList[i].email;
            this.id = this.adminList[i]._id;
          }
        }
        console.log(this.id);
        
      },
      error => {

      }
    );
  }

}

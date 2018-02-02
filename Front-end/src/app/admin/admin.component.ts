import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminList = [];
  file : File;
  username;
  adminList2 = [];
  namaAdmin;
  fotoAdmin;  

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
    this.loadAdminList();
    this.loadSessionAdmin();
  }

  fileChange($event){
    this.file = $event.target.files[0];
  }

  loadSessionAdmin(){
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    this.username = sessionStorage.getItem("username");
    // console.log(this.username);
    this.http.get("http://localhost:3000/api/admin/", options)
    .subscribe(
      result => {
        this.adminList2 = result.json();
        for(let i=0; i<this.adminList2.length; i++){
          if(this.adminList2[i].username==this.username){
            this.namaAdmin = this.adminList2[i].nama;
            this.fotoAdmin = this.adminList2[i].foto;
          }
        }
        // console.log(this.fotoAdmin);
        
      },
      error => {

      }
    );
  }

  loadAdminList(){
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    this.http.get("http://localhost:3000/api/admin", options)
    .subscribe(
      result => {
        this.adminList = result.json();
      },
      error => {

      }
    );
  }

  SaveAdminData(f : NgForm){
    if(f.value.nama != "" && f.value.nama != null && f.value.username != null && f.value.username != null && f.value.email != null && f.value.email != null && this.file != null){
      let formData = new FormData();
      formData.append("nama", f.value.nama);
      formData.append("username", f.value.username);
      formData.append("email", f.value.email);
      formData.append("password", f.value.password);
      formData.append("foto", this.file);

      let token = sessionStorage.getItem("token");
      let header = new Headers({ "Authorization" : "Bearer "+token});
      let options = new RequestOptions({ headers : header});

      this.http.post("http://localhost:3000/api/admin", formData, options)
      .subscribe(
        result => {
          console.log(result.json());
          this.route.navigate(['/dashboard']);
          f.reset();
        },
        error => {
          console.log(error);
        }
      )
    }else{

    }
  }

  DeleteAdminData(id){
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    this.http.delete("http://localhost:3000/api/admin/"+id, options)
    .subscribe(
      result => {
        this.loadAdminList();
      },
      error => {
        console.log(error);
      }
    )
  }

}

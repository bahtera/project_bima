import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  file : File;
  admin = {};
  username1;
  adminList = [];
  namaAdmin;
  fotoAdmin;
  id;

  constructor(private httpClient: HttpClient, private http: Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if(!token){
      //redirect to login
      this.router.navigate(['/login']);
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
          this.router.navigate(['/login']);
        }
      );
    }
    // this.getAdmin();
    this.loadSessionAdmin();
  }

  loadSessionAdmin(){
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    this.username1 = sessionStorage.getItem("username");
    console.log(this.username1);
    this.http.get("http://localhost:3000/api/admin/",options)
    .subscribe(
      result => {
        this.adminList = result.json();
        for(let i=0; i<this.adminList.length; i++){
          if(this.adminList[i].username==this.username1){
            this.namaAdmin = this.adminList[i].nama;
            this.fotoAdmin = this.adminList[i].foto;
            this.id = this.adminList[i]._id;
          }
        }
        console.log(this.id);
        this.getAdmin();
        
      },
      error => {

      }
    );
  }

  getAdmin() {
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    this.httpClient.get('http://localhost:3000/api/admin/detail/'+this.id).subscribe(data => {
      this.admin = data;
    });
  }

  fileChange($event){
    this.file = $event.target.files[0];
  } 

  updateAdmin(f : NgForm) {

    let formData = new FormData();
      formData.append("nama", f.value.nama);
      formData.append("username", f.value.username);
      formData.append("password", f.value.password);
      formData.append("email", f.value.email);
      formData.append("foto", this.file);
      // formData.append("penulis", this.namaAdmin);

      let token = sessionStorage.getItem("token");
      let header = new Headers({ "Authorization" : "Bearer "+token});
      let options = new RequestOptions({ headers : header});

      this.http.put('http://localhost:3000/api/admin/edit/'+this.id, formData, options)
      // this.http.post("http://localhost:3000/api/resep", formData, options)
      .subscribe(
        result => {
          console.log(result.json());
          this.router.navigate(['/dashboard']);
          // f.reset();
        },
        error => {
          console.log(error);
        }
      )


    // console.log(data);
    // this.http.put('http://localhost:3000/api/admin/edit/'+id, data)
    //   .subscribe(res => {
    //     let id = res['_id'];
    //     this.router.navigate(['/admin', id]);
    //   }, (err) => {
    //     console.log(err);
    //   }
    // );
  }
}

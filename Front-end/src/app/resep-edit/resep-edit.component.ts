import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resep-edit',
  templateUrl: './resep-edit.component.html',
  styleUrls: ['./resep-edit.component.css']
})
export class ResepEditComponent implements OnInit {

  file : File;
  resep = {};
  username;
  adminList = [];
  namaAdmin;
  fotoAdmin;
  id;
  id2;

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
    this.getResep(this.route.snapshot.params['id']);
    this.id2 = this.route.snapshot.params['id'];
    this.loadSessionAdmin();
  }

  loadSessionAdmin(){
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    this.username = sessionStorage.getItem("username");
    console.log(this.username);
    this.http.get("http://localhost:3000/api/admin/", options)
    .subscribe(
      result => {
        this.adminList = result.json();
        for(let i=0; i<this.adminList.length; i++){
          if(this.adminList[i].username==this.username){
            this.namaAdmin = this.adminList[i].nama;
            this.fotoAdmin = this.adminList[i].foto;
            this.id = this.adminList[i]._id;
          }
        }
        console.log(this.id);
        // this.getAdmin();
        
      },
      error => {

      }
    );
  }

  getResep(id) {
    this.httpClient.get('http://localhost:3000/api/resep/detail/'+id).subscribe(data => {
      this.resep = data;
    });
  }

  // updateResep(id, data) {
  //   this.http.put('http://localhost:3000/api/resep/edit/'+id, data)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.router.navigate(['/edit-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  fileChange($event){
    this.file = $event.target.files[0];
  } 

  updateResep(f : NgForm) {

    let formData = new FormData();
      formData.append("judul", f.value.judul);
      formData.append("kategori", f.value.kategori);
      formData.append("resep", f.value.resep);
      // formData.append("email", f.value.email);
      formData.append("gambar", this.file); 
      formData.append("penulis", this.namaAdmin);

      let token = sessionStorage.getItem("token");
      let header = new Headers({ "Authorization" : "Bearer "+token});
      let options = new RequestOptions({ headers : header});

      this.http.put('http://localhost:3000/api/resep/edit/'+this.id2, formData, options)
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
  }

}

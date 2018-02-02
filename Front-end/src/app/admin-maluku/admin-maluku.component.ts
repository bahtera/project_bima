import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-maluku',
  templateUrl: './admin-maluku.component.html',
  styleUrls: ['./admin-maluku.component.css']
})
export class AdminMalukuComponent implements OnInit {

  resepList = [];
  kategori;
  username;
  adminList = [];
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
    this.loadResepList();
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
          }
        }
        // console.log(this.id);
        
      },
      error => {

      }
    );
  }

  loadResepList(){
    this.http.get("http://localhost:3000/api/resep/maluku")
    .subscribe(
      result => {
        this.resepList = result.json();
      },
      error => {

      }
    );
  }

  DeleteResepData(id){
    let token = sessionStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer "+token});
    let options = new RequestOptions({ headers : header});

    this.http.delete("http://localhost:3000/api/resep/"+id, options)
    .subscribe(
      result => {
        this.loadResepList();
      },
      error => {
        console.log(error);
      }
    )
  }

  CariResep(){
    // console.log(this.kategori);
    if(this.kategori == "Semua"){
      this.route.navigate(['/dashboard']);
    }else if(this.kategori == "Jawa"){
      this.route.navigate(['/dashboard-jawa']);
    }else if(this.kategori == "Sumatera"){
      this.route.navigate(['/dashboard-sumatera']);
    }else if(this.kategori == "Kalimantan"){
      this.route.navigate(['/dashboard-kalimantan']);
    }else if(this.kategori == "Sulawesi"){
      this.route.navigate(['/dashboard-sulawesi']);
    }else if(this.kategori == "Maluku"){
      this.route.navigate(['/dashboard-maluku']);
    }else if(this.kategori == "Bali"){
      this.route.navigate(['/dashboard-bali']);
    }else if(this.kategori == "Papua"){
      this.route.navigate(['/dashboard-papua']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masakan-maluku',
  templateUrl: './masakan-maluku.component.html',
  styleUrls: ['./masakan-maluku.component.css']
})
export class MasakanMalukuComponent implements OnInit {

  resepList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadResepList()
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

}

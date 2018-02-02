import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masakan-sulawesi',
  templateUrl: './masakan-sulawesi.component.html',
  styleUrls: ['./masakan-sulawesi.component.css']
})
export class MasakanSulawesiComponent implements OnInit {

  resepList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadResepList()
  }

  loadResepList(){
    this.http.get("http://localhost:3000/api/resep/sulawesi")
    .subscribe(
      result => {
        this.resepList = result.json();
      },
      error => {

      }
    );
  }

}

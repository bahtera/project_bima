import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masakan-jawa',
  templateUrl: './masakan-jawa.component.html',
  styleUrls: ['./masakan-jawa.component.css']
})
export class MasakanJawaComponent implements OnInit {

  resepList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadResepList()
  }

  loadResepList(){
    this.http.get("http://localhost:3000/api/resep/jawa")
    .subscribe(
      result => {
        this.resepList = result.json();
      },
      error => {

      }
    );
  }
}

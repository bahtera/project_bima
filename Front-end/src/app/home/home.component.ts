import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resepList = [];
  
  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadResepList();
  }

  loadResepList(){
    this.http.get("http://localhost:3000/api/resep")
    .subscribe(
      result => {
        this.resepList = result.json();
      },
      error => {

      }
    );
  }

}

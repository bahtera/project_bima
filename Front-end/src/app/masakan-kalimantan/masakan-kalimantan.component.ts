import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masakan-kalimantan',
  templateUrl: './masakan-kalimantan.component.html',
  styleUrls: ['./masakan-kalimantan.component.css']
})
export class MasakanKalimantanComponent implements OnInit {

  resepList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadResepList()
  }

  loadResepList(){
    this.http.get("http://localhost:3000/api/resep/kalimantan")
    .subscribe(
      result => {
        this.resepList = result.json();
      },
      error => {

      }
    );
  }

}

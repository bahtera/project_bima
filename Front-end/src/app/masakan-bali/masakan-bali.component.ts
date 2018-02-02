import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masakan-bali',
  templateUrl: './masakan-bali.component.html',
  styleUrls: ['./masakan-bali.component.css']
})
export class MasakanBaliComponent implements OnInit {

  resepList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadResepList()
  }

  loadResepList(){
    this.http.get("http://localhost:3000/api/resep/bali")
    .subscribe(
      result => {
        this.resepList = result.json();
      },
      error => {

      }
    );
  }

}

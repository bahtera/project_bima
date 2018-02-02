import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  dataresep = {};
  resepList = [];

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient, private http: Http) { }

  ngOnInit() {
    this.getResepDetail(this.route.snapshot.params['id']);
    this.loadResepList()
  }

  getResepDetail(id) {
    this.httpClient.get('http://localhost:3000/api/resep/detail/'+id).subscribe(data => {
      this.dataresep = data;
      console.log(this.dataresep);
    });
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

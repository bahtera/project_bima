import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : Http, private route : Router) { }

  username : string;
  password : string;

  ngOnInit() {
    // sessionStorage.removeItem("username");
  }

  Login(f : NgForm){
    let obj = {
      username : f.value.username,
      password : f.value.password
    }

    let header = new Headers({"Content-Type" : "application/json"});
    let options = new RequestOptions({headers : header});

    this.http.post("http://localhost:3000/api/login", obj, options)
    .subscribe(
      result=>{
        console.log(result.json())
        console.log(obj.username);
        sessionStorage.setItem("username", obj.username);
        sessionStorage.setItem("token", result.json().token)
        this.route.navigate(['/dashboard']);
        
      },
      error=>{
        console.log("User not found");
      }
    )
  }

}

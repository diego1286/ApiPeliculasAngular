import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {

  year  = new Date().getFullYear();

  constructor(){}

  ngOnInit(): void { console.log('funcionan los onInit este es es de home')}



  
}

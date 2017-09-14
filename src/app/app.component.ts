import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD553RjwNlc5L3P3spxgmq129MG5MZIiU4",
      authDomain: "angular-http-25969.firebaseapp.com"
    });
  }

}

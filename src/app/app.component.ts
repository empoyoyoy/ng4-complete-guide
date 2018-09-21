import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBjryWlcuZPEFzVZ_YatiItasdlDwsYN4E",
      authDomain: "ng-recipe-book-d5a55.firebaseapp.com"
    });

  }

  onNavigate(feature: string){
    this.loadedFeature = feature;

  }
}

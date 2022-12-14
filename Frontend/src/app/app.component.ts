import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListOfPeople';

  constructor(private router: Router){}

  List(){
    this.router.navigate(["toList"]);
  }

  Add(){
    this.router.navigate(["toAdd"]);
  }

  Update(){
    this.router.navigate(["toUpdate"]);
  }

  Transfer(){
    this.router.navigate(["toTransfer"]);
  }




}

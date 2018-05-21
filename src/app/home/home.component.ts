import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colSp = 2;
  email = "n@gmail.com";
  title = "eee";
  courses = ["Course1", "Course2", "Course3", "Course3"];
  constructor() { }


  onDivClick() {

    console.log("on DIV click");

  }


  changeText() {


    console.log(this.email);
  }

  onSave($event) {

    $event.stopPropagation();

    console.log("Clicked:" + $event);
  }
  ngOnInit() {
  }

  gtTitle() {
    return this.title;
  }
}

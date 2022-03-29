import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToOperatorDashboard(){
    console.log("dasda");
    window.open(
      'http://localhost:3000/d/PgjCj-Pnk/operator_dashboard?orgId=1',
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  goToRouteCreator(){
    // console.log("dasda");
    // window.location.href = 'assets/test/New Text Document.html';
  
    window.open(
      'assets/test/New Text Document.html',
      '_blank' // <- This is what makes it open in a new window.
    );

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {
  title: string = 'My Companion(s)';

  constructor() { }

  ngOnInit() {
  }

}

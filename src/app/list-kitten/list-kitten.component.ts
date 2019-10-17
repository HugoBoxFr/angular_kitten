import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  title:string = 'Current Residents';

  @Input('display-list') list: Kitten[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.css']
})
export class KittenComponent implements OnInit {

  @Input() kitten: Kitten;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {
  title: string = "New Resident";

  kitten: Kitten = new Kitten();
  
  @Output() addEvent = new EventEmitter<Kitten>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addEvent.emit(this.kitten);
    this.kitten = new Kitten();
  }
}

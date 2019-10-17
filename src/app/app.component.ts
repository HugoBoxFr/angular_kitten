import { Component } from '@angular/core';
import { Kitten } from './kitten';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyKitten.com';

  kittens: Kitten[] = [];

  addKitten(kitten: Kitten) {
    this.kittens.push(kitten);
  }


}

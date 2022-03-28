import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-button-example',
  templateUrl: './simple-button-example.component.html',
  styleUrls: ['./simple-button-example.component.css'],
})
export class SimpleButtonExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    window.alert('Foobar was clicked!');
  }
}

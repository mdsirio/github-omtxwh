import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-button",
  templateUrl: "./simple-button.component.html",
  styleUrls: ["./simple-button.component.css"],
})
export class SimpleButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonColor: string = 'blue';

  constructor() {}

  ngOnInit(): void {}
}

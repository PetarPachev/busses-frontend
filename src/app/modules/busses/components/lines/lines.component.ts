import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lines",
  templateUrl: "./lines.component.html",
  styleUrls: ["./lines.component.scss"]
})
export class LinesComponent implements OnInit {
  lines: number[] = [1, 4, 6, 7, 9, 10, 11, 12, 15, 16, 17, 18, 20, 21, 22, 24, 25, 26, 27, 29, 36, 37, 44, 66, 93, 99, 113, 116, 222];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'danny-boy',
  templateUrl: './danny-boy.component.html',
  styleUrls: ['./danny-boy.component.css']
})
export class DannyBoyComponent implements OnInit {

  things = "abracadabra"

  constructor() { }

  ngOnInit(): void {
  }

}

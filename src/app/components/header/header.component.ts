import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onCity = new EventEmitter<string>();
  @Output() onZipCode = new EventEmitter<string>();
  @Output() onCoordinates = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}

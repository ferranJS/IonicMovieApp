import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Output() queryEvent = new EventEmitter<string>();

  sendQuery(list: string) {
    this.queryEvent.emit(list);
  }
}

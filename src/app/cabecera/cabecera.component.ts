import { ElementRef, ViewChild } from '@angular/core';
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

  
  @ViewChild("queryEvent") input: ElementRef;

  sendQuery(list: string) {
    this.queryEvent.emit(list);
  }

  focus() {
    this.input.nativeElement.focus();
  }

}

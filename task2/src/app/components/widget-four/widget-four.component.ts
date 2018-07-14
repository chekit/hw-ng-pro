import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-four',
  templateUrl: './widget-four.component.html',
  styleUrls: ['./widget-four.component.scss']
})
export class WidgetFourComponent implements OnInit {
  @Input() title: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-five',
  templateUrl: './widget-five.component.html',
  styleUrls: ['./widget-five.component.scss']
})
export class WidgetFiveComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

}

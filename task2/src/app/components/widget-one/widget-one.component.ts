import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.scss']
})
export class WidgetOneComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

}

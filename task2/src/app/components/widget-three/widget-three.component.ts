import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-three',
  templateUrl: './widget-three.component.html',
  styleUrls: ['./widget-three.component.scss']
})
export class WidgetThreeComponent implements OnInit {
  @Input() title: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}

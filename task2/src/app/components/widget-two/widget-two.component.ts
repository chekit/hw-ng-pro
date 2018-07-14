import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.scss']
})
export class WidgetTwoComponent implements OnInit {
  @Input() title: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}

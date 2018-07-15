import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../utils/widget.abstract';

@Component({
  selector: 'app-widget-five',
  templateUrl: './widget-five.component.html',
  styleUrls: ['./widget-five.component.scss']
})
export class WidgetFiveComponent extends Widget implements OnInit {
  @Input() title: string = 'Widget Five Title';

  ngOnInit() {
  }

}

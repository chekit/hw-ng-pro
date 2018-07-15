import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../utils/widget.abstract';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.scss']
})
export class WidgetOneComponent extends Widget implements OnInit {
  @Input() title: string = 'Widget One Title';

  ngOnInit() {
  }

}

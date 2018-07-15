import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../utils/widget.abstract';

@Component({
  selector: 'app-widget-three',
  templateUrl: './widget-three.component.html',
  styleUrls: ['./widget-three.component.scss']
})
export class WidgetThreeComponent extends Widget implements OnInit {
  @Input() title: string = 'Widget Three Title';

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../utils/widget.abstract';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.scss']
})
export class WidgetTwoComponent extends Widget implements OnInit {
  @Input() title: string = 'Widget Two Title';

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../utils/widget.abstract';

@Component({
  selector: 'app-widget-four',
  templateUrl: './widget-four.component.html',
  styleUrls: ['./widget-four.component.scss']
})
export class WidgetFourComponent extends Widget implements OnInit {
  @Input() title: string = 'Widget Four Title';

  ngOnInit() {
  }

}

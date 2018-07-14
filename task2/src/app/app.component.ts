import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewChild, Renderer2, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { WidgetFourComponent } from './components/widget-four/widget-four.component';
import { HostDirective } from './utils/host.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {

  @ViewChild(HostDirective) private host: HostDirective;

  constructor(
    private appService: AppService,
    private componentFactoryResorver: ComponentFactoryResolver,
    private renderer2: Renderer2
  ) {

  }

  public ngOnInit(): void {
    const widget = this.componentFactoryResorver.resolveComponentFactory(WidgetFourComponent);
    const ref = this.host.view.createComponent(widget);

    this.renderer2.addClass(ref.location.nativeElement, 'dashboard__item');
    ref.instance.title = 'Widget Dynamic';
  }

  private generateComponentText(prefix: string, className: string = ''): HTMLElement {
    const p = document.createElement('p');
    p.textContent = `${prefix} says hello`;
    p.classList.add(className);

    return p;
  }
}

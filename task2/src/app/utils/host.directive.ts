import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  public readonly view: ViewContainerRef;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {
    this.view = viewContainerRef;
  }

}

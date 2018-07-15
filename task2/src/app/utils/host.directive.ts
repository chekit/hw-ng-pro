import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  public readonly view: ViewContainerRef;

  constructor(
    viewContainerRef: ViewContainerRef
  ) {
    this.view = viewContainerRef;
  }

}

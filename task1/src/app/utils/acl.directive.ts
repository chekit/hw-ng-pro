import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Directive({
  selector: '[acl]'
})
export class AclDirective implements OnInit, OnDestroy {
  private viewCreated = false;
  private subscription: Subscription = new Subscription();
  private currentRole$: Observable<string> = this.authService.getCurrentUserRole();

  @Input('acl') roles: string[] = [];

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.currentRole$.subscribe((role: string) => {
      if (this.roles.some(r => r === role)) {
        if (this.viewCreated) {
          this.viewContainer.clear();
        }

        this.viewContainer.createEmbeddedView(this.template);
        this.viewCreated = true;
      } else {
        this.viewContainer.clear();
        this.viewCreated = false;
      }
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

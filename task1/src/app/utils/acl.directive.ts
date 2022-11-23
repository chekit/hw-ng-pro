import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { AuthService } from "../auth.service";

@Directive({
  selector: "[acl]",
})
export class AclDirective implements OnInit, OnDestroy {
  private viewCreated = false;
  private currentRole$: Observable<string> =
    this.authService.getCurrentUserRole();

  private destroy$: Subject<boolean> = new Subject();

  @Input("acl") roles: string[] = [];

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.currentRole$
      .pipe(takeUntil(this.destroy$))
      .subscribe((role: string) => {
        if (this.roles.some((r) => r === role)) {
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
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

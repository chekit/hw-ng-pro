import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

interface IFormStatus {
  status: FormStatus;
}

enum FormStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  PRISTINE = 'PRISTINE'
}

@Component({
  selector: 'custom-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class RegisterFormComponent implements OnInit, OnChanges {
  public registerForm: FormGroup = null;

  public formErrors: { [key: string]: string } = {
    firstName: '',
    lastName: '',
    nickName: '',
    password: '',
    phone: '',
    private: ''
  };

  @Input() public type: 'full' | 'min' = 'full';
  @Output() public formStatus: EventEmitter<IFormStatus> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.createForm();

    this.formStatus.emit({ status: FormStatus.PRISTINE });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes.type.isFirstChange()) {
      this.createForm();
    }
  }

  public sendForm(): void {
    this.formErrors = this.validateForm(this.registerForm, this.formErrors);

    Object.keys(this.formErrors).some(key => this.formErrors[key].length > 0)
      ? this.formStatus.emit({ status: FormStatus.ERROR })
      : this.formStatus.emit({ status: FormStatus.SUCCESS });
  }

  private createForm(): Observable<any> {
    this.registerForm = this.fb.group({
      firstName: ['', this.type === 'full' ? [Validators.required] : []],
      lastName: [''],
      nickName: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', this.type === 'full' ? [Validators.required] : []],
      private: [false, Validators.pattern(/true/g)]
    });

    return this.registerForm.valueChanges;
  }

  private validateForm(formValues: FormGroup, errorsContainer: any): { [key: string]: string } {
    return Object.keys({ ...formValues.controls }).reduce((acc, value) => {
      errorsContainer[value] = !formValues.controls[value].valid ? 'Поле заполнено неверно' : '';
      return errorsContainer;
    }, errorsContainer);
  }
}

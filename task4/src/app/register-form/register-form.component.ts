import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { RegisterFormValidationService } from './register-form.service';

interface IFormStatus {
  status: string;
  errors: string[];
}

@Component({
  selector: 'custom-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class RegisterFormComponent implements OnInit {
  public registerForm: FormGroup = null;
  
  public formErrors: {[key: string]: string} = {
    firstName: '',
    lastName: '',
    nickName: '',
    password: '',
    phone: '',
    private: ''
 };

  @Input() public type: string = 'full';
  @Output() public formStatus: EventEmitter<IFormStatus> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private formValidation: RegisterFormValidationService
  ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public sendForm(): void {
    this.validateForm(this.registerForm, this.formErrors);
  }

  private createForm(): Observable<any> {
    this.registerForm = this.fb.group({
      firstName: ['', this.type === 'full' ? [Validators.required] : []],
      lastName: [''],
      nickName: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', this.type === 'full' ? [Validators.required, Validators.max(12)] : []],
      private: [false, Validators.pattern(/true/g)]
    });

    return this.registerForm.valueChanges;
  }

  private validateForm(formValues: FormGroup, errorsContainer: any): void {
    public validate(formValues: FormGroup, errorsContainer: any) {
      Object.keys(formValues.controls).reduce((acc, value) => {
        errorsContainer[value] = formValues.controls[value].valid ? 'Поле заполнено неверно' : '';
  
        return errorsContainer;
      }, errorsContainer);
  
      debugger;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup = null;

  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      
    })
  }
}

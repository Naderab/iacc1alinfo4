import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css'],
})
export class FormAppartmentComponent {
  f: FormGroup = new FormGroup({
    apartNum: new FormControl(0,[Validators.required]),
    floorNum: new FormControl(),
    surface: new FormControl(),
    terrace: new FormControl(),
    surfaceTerrace: new FormControl(),
    category: new FormControl(),
    description: new FormControl("",[Validators.required,Validators.minLength(10)]),
  });

  add() {
    console.log(this.f.value)
    console.log(this.f.get('description'))
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {

  constructor(private rs:ResidenceService,private r:Router){}
  residenceForm: FormGroup = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    image: new FormControl({value:'test image',disabled:true})
  })

  // residenceForm: FormGroup = new FormGroup({
  //   name: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city:new FormControl()
  //   }),
  //   image: new FormControl({ value: 'test image', disabled: true }),
  // });

  add() {
    console.log(this.residenceForm.value);
    console.log(this.residenceForm.getRawValue());
    console.log(this.residenceForm.get('name'));
    this.rs.addResidenceToList(this.residenceForm.getRawValue());
    this.r.navigate(['/residences']);
  }
}

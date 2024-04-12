import { Component } from '@angular/core';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {

  aFromComponent!: number;
  constructor(private rs: ResidenceService) {
    this.aFromComponent = rs.a;
  }
  title: string = 'Bonjour 1ALINFO4';
  person = { id: 1, name: 'Foulen' };
  persons = [
    { id: 1, name: 'Foulen' },
    { id: 2, name: 'Ben Foulen' },
  ];
  quantity: number = 10;

  BuyProduct() {
    this.quantity--;
  }

   searchText:string = ""
}

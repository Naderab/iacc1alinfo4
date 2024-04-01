import { Component } from '@angular/core';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
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

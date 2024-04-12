import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'ElFell',
      address: 'Ezzahra',
      image:
        'https://www.nexity.fr/media/8739/download/residence-senior-nexity-exterieur.jpg?v=1',
    },
    {
      id: 2,
      name: 'ElYassmine',
      address: 'Mourouj',
      image:
        'https://www.nexity.fr/media/8739/download/residence-senior-nexity-exterieur.jpg?v=1',
    },
    {
      id: 3,
      name: 'Nour',
      address: 'Boumhal',
      image:
        'https://www.nexity.fr/media/8739/download/residence-senior-nexity-exterieur.jpg?v=1',
    },
  ];

  addResidenceToList(r: Residence) {
    this.listResidences.push(r);
  }
  a: number = 0;
  UpdateA(n: number) {
    this.a = n;
  }
  constructor() {}
}

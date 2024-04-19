import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

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
  constructor(private http: HttpClient) {}
  apiUrl: string = environment.baseURL+'residences/';
  getResidences() {
    return this.http.get<Residence[]>(this.apiUrl);
  }

  addResidence(residence: Residence) {
    return this.http.post(this.apiUrl, residence);
  }

  updateResidence(id: number, residence: Residence) {
    return this.http.put(this.apiUrl + id, residence);
  }

  deleteResidence(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../core/services/residence.service';
import { Apartment } from '../core/models/apartment';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css'],
})
export class DetailResidenceComponent {
  id!: number;
  residence!: Residence;
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.rs.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.rs.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.rs.listResidences[1],
    },
    {
      id: 4,
      appartNum: 4,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.rs.listResidences[1],
    },
  ];
  constructor(private ar: ActivatedRoute, private rs: ResidenceService) {
    this.id = this.ar.snapshot.params['id'];
    this.residence = this.rs.listResidences.filter((r) => r.id == this.id)[0];
    console.log(this.ar.snapshot.params['id']);
    this.showApartement();
  }
  listApartByResidence: Apartment[] = [];
  listApartSearch: Apartment[] = [];
  hide = true;

  showApartement() {
    this.listApartByResidence = [];
    this.hide = false;
    this.listApartments.forEach((element) => {
      if (element.residence == this.residence) {
        this.listApartByResidence.push(element);
      }
    });
    this.listApartSearch = this.listApartByResidence;
  }
}

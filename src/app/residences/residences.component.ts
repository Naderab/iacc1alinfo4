import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Apartment } from '../core/models/apartment';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {

  constructor(private rs: ResidenceService) {
    this.listResidences = rs.listResidences;
  }
  listApartByResidence: Apartment[] = [];
  hide: boolean = true;
  searchText: string = '';
  listApartSearch: Apartment[] = [];
  listResidences: Residence[] = [
  ];

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
      residence: this.listResidences[0],
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
      residence: this.listResidences[0],
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
      residence: this.listResidences[1],
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
      residence: this.listResidences[1],
    },
  ];

  showApartement(r: Residence) {
    this.listApartByResidence = [];
    this.hide = false;
    this.listApartments.forEach((element) => {
      if (element.residence == r) {
        this.listApartByResidence.push(element);
      }
    });
    this.listApartSearch = this.listApartByResidence;
  }
  updateAFromComponent() {
    this.rs.UpdateA(10);
  }
  searchBySurface() {
    this.listApartSearch = [];
    if (this.searchText == '') {
      this.listApartSearch = this.listApartByResidence;
    } else {
      this.listApartByResidence.forEach((element) => {
        if (element.surface == Number(this.searchText)) {
          this.listApartSearch.push(element);
        }
      });
    }
  }
}

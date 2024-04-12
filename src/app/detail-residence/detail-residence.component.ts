import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css']
})
export class DetailResidenceComponent {

  id!: number;
  residence!: Residence;
  constructor(private ar: ActivatedRoute,private rs:ResidenceService) {
    this.id = this.ar.snapshot.params['id'];
    this.residence = this.rs.listResidences.filter((r)=>r.id == this.id)[0]
    console.log(this.ar.snapshot.params['id'])
  }

}

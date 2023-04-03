import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MissionService } from '../mission.service';
import { Mission } from '../models/Mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit{
  ngOnInit(): void {
    this.getMissionByFlightNumber()
  }

  @Input() mission?: Mission

  constructor(private route: ActivatedRoute,private missionService: MissionService,private location: Location
  ) { }

  getMissionByFlightNumber(): void{
    const id = this.route.snapshot.paramMap.get('id')
    if (id != null) {
      this.mission = this.missionService.getByFlightNumber(Number(id))
    }
  }

  Back(): void {
    this.location.back();
  }

}

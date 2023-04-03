import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Mission } from '../models/Mission';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit{

  list : [Mission]=[{"flight_number":1,"mission_name":"FalconSat","launch_year":"2006",
    "mission_patch_small":"https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    "details":"Engine failure at 33 seconds and loss of vehicle",}]

  constructor(private missionService: MissionService){}
  
  ngOnInit(): void {
    this.getList() 
  }

  getList(): void{
    this.list = this.missionService.getAll()
  }

}

import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Mission } from '../models/Mission';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent implements OnInit{
  
list : Mission[]=[]

constructor(private missionService: MissionService){}
  
ngOnInit(): void {this.getList() }

getList(): void{ this.list = this.missionService.getAll() }

}

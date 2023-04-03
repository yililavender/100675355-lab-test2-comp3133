import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry , Observable} from 'rxjs';
import { Mission } from './models/Mission';


@Injectable({
  providedIn: 'root'
})

export class MissionService {
  list : Mission[]=[]
  list$: any
  constructor(private httpClient: HttpClient) { }

  private REST_API_URL = "https://api.spacexdata.com/v3/launches"

  getAllMission(){
    return this.httpClient.get(this.REST_API_URL).pipe(retry(3)) 
  }
  getAll() {
    this.list$ = this.getAllMission()
    return this.getBylaunch_year()
  }
  
  getBylaunch_year(): Mission[] {
    this.list$.forEach((element: any) => {
      element.forEach((eachMission: any) => {
        const { flight_number, mission_name, launch_year, details, links } = eachMission
        const mission_patch_small: string = links.mission_patch_small
        const mission: Mission = { flight_number, mission_name, launch_year, details, mission_patch_small}
        this.list.push(mission)
      })
    });
    return this.list
  }
  getByFlightNumber(id: number): any {
    const missionByFlightNumber = this.getAllMission()
    return missionByFlightNumber.find(mission => mission.flight_number == id)

  }
 
}

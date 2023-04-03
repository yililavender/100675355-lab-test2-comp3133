export class Mission{
    flight_number:number
    mission_name: string 
    launch_year:string    
    mission_patch_small:string
    details:string
 
    constructor(flight_number:number, mission_name: string,
    launch_year: string,mission_patch_small: string, details: string)
    {
        this.flight_number= flight_number
        this.mission_name = mission_name
        this.launch_year = launch_year
        this.mission_patch_small = mission_patch_small
        this.details = details
    }

}
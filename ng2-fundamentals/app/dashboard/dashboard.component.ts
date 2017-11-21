import { Component, OnInit } from '@angular/core'

import { Display } from '../display/display'
import { DisplayService } from '../display/display.service'

@Component({
	moduleId:module.id,
	selector:'app-dashboard',
	templateUrl:'./dashboard.component.html',
	styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

dashboardData:Display[]=[];

constructor(private displayService: DisplayService){
	
}

ngOnInit(){
	this.getDashboardData();
}
  getDashboardData(): void {
    this.displayService.getData()
      .subscribe(dashboardData => this.dashboardData = dashboardData.slice(1, 5));
  }
}
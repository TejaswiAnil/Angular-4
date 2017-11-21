import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Display } from '../display/display'
import { DisplayService } from '../display/display.service'

@Component({
	moduleId: module.id,
	selector:'display-details',
	templateUrl:'./display-details.component.html',
	styleUrls:['./display-details.component.ts']
})

export class DisplayDetailsComponent{

@Input()
data: Display;

constructor(
	private displayService: DisplayService,
	private route: ActivatedRoute,
	private location: Location
){}

ngOnInit(){
	this.getDisplayDetails();
}

getDisplayDetails(){
	const id = +this.route.snapshot.paramMap.get('id');
	this.displayService.getDetails(id)
						.subscribe(data=>this.data=data);		
}

goBack():void{
	this.location.back();
}
	
}
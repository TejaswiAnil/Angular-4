import { Component, OnInit } from '@angular/core'

import { Display } from './display'
//import { MockData } from './mock-display' -------replacing with services
import { DisplayService } from './display.service'

@Component({
	moduleId: module.id,
	selector:'app-display',
	templateUrl:'./display.component.html',
	styleUrls:['./display.component.css']
})

export class DisplayComponent implements OnInit{
	
	selectedVal: Display;
	dataList: Display[];
	displayStr:string;

	ngOnInit() {
	 this.displayStr="Display Component";
	 //this.dataList=MockData;  -------replacing with services
	 this.getData();
	}
	
	constructor(private displayService: DisplayService){

	}

	/*selectedItem(list: Display) {
		this.selectedVal = list;
	}*/

	getData():void{
		this.displayService.getData()
						.subscribe(dataList => this.dataList = dataList);
	}

}		
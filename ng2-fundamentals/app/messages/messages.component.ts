import { Component } from '@angular/core'

import { MessagesService } from './messages.service'

@Component({
	moduleId:module.id,
	selector:'app-messages',
	templateUrl:'./messages.component.html'
})

export class MessagesComponent{
		constructor(public messagesService: MessagesService){

	}
	
}
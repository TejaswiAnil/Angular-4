import { Injectable } from '@angular/core'

//...asynchronous data retrieval from service
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//.....Synchronous
import { Display } from './display'
import { MockData } from './mock-display'

//service injection
import { MessagesService } from '../messages/messages.service'

@Injectable()
export class DisplayService{
	constructor(private messagesService: MessagesService){}

	getData():Observable<Display[]>{
		this.messagesService.addMessage('successfully displayed data list');
		return of(MockData);
	}

	getDetails(id: number):Observable<Display>{
		  this.messagesService.addMessage(`DisplayService: fetched data id=${id}`);
		  return of(MockData.find(x => x.id === id));

	}
}
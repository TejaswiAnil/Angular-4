import { Injectable } from '@angular/core'

@Injectable()
export class MessagesService{
	
	messageList:String="";

	addMessage(msg:String){
		this.messageList=msg;
	}
	
	clearMessage(){
		this.messageList = "";
	}
}
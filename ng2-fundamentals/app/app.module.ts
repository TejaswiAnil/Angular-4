import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { DisplayComponent } from './display/display.component'
import { DisplayDetailsComponent } from './dispaly-details/display-details.component'
import { MessagesComponent } from './messages/messages.component'
import { DashboardComponent } from './dashboard/dashboard.component'

import { DisplayService } from './display/display.service'
import { MessagesService } from './messages/messages.service'


@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
    	AppRoutingModule
	],
	declarations: [
		AppComponent,
		DisplayComponent,
		DisplayDetailsComponent,
    	MessagesComponent,
    	DashboardComponent
	],
  providers:[
    DisplayService,
    MessagesService
  ],    
  	bootstrap: [AppComponent]
})

export class AppModule{}
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DisplayComponent } from './display/display.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DisplayDetailsComponent } from './dispaly-details/display-details.component'

const routes: Routes =[
					{path:'display', component:DisplayComponent},
					{path:'dashboard', component:DashboardComponent},
					{path:'details/:id', component:DisplayDetailsComponent},
					{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
					// { path: '**', component: PageNotFound },
					];

@NgModule({
	exports:[ RouterModule],
	imports:[ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule{
	
}
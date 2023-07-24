import {EventListComponent} from "./events/event-list.component";
import {Routes} from "@angular/router";
import {EventDetailsComponent} from "./events/event-details.component";
import {CreateEventComponent} from "./events/create-event.component";
import {Page404Component} from "./error/page-404.component";

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '404', component: Page404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]

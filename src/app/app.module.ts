import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventListComponent} from './events/event-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {EventDetailsComponent} from "./events/event-details.component";
import {EventService} from "./shared/event.service";
import {ToasterService} from "./shared/toaster.service";
import {CreateEventComponent} from "./events/create-event.component";
import {Page404Component} from "./error/page-404.component";

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

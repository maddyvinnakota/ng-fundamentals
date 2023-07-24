import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventListComponent} from './events/event-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {EventDetailsComponent} from "./events/event-details.component";
import {EventService} from "./common/event.service";
import {ToasterService} from "./common/toaster.service";

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent
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

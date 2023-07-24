import {Component, OnInit} from '@angular/core';
import {EventService} from "../shared/event.service";
import {ToasterService} from "../shared/toaster.service";

@Component({
  template: `
    <div>
      <p>All Upcoming Events</p>
      <div class="row">
        <div *ngFor="let eve of events" class="col-md-5">
          <event-thumbnail (click)="handleEventClicked(eve.name)" [eventInfo]="eve"/>
        </div>
      </div>
    </div>
  `
})
export class EventListComponent implements OnInit {

  // @ts-ignore
  events: any[]

  constructor(private eventService: EventService, private toasterService: ToasterService) {
  }

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
  }

  handleEventClicked(eventName: string) {
    console.log(eventName)
    this.toasterService.success(eventName);
  }
}

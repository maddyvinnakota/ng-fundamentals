import {Component, OnInit} from "@angular/core";
import {EventService} from "../common/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'event-details',
  template:
    `
      <div class="well hoverwell thumbnail">
        <div>Name: {{eventInfo.name}}</div>
        <div>Date: {{eventInfo.date}}</div>
        <div>Venue: {{eventInfo.venue.name}}</div>
        <div>
          <span> Address: {{eventInfo.venue.address.street}}</span>
          <span class="pad-left">{{eventInfo.venue.address.city}} {{eventInfo.venue.address.country}}</span>
        </div>
      </div>
    `
})

export class EventDetailsComponent implements OnInit {
  eventInfo: any

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.eventInfo = this.eventService.getEventInfo(+this.activatedRoute.snapshot.params['id']);
  }

}

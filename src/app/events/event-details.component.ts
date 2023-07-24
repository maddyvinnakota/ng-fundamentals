import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let eve = this.eventService.getEventInfo(+this.activatedRoute.snapshot.params['id']);
    if (eve) {
      this.eventInfo = eve;
    } else {
      this.router.navigateByUrl('/404');
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {EventService} from "../common/event.service";
import {ToasterService} from "../common/toaster.service";

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
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

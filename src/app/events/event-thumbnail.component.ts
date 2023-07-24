import {Component, Input} from "@angular/core";

@Component({
  selector: "event-thumbnail",

  template: `
      <div [routerLink]="['/events', eventInfo.id]" class="well hoverwell thumbnail">
          <div>Name: {{eventInfo.name}}</div>
          <div>Date: {{eventInfo.date}}</div>
          <div>Venue: {{eventInfo.venue.name}}</div>
          <div>
              <span> Address: {{eventInfo.venue.address.street}}</span>
              <span class="pad-left">{{eventInfo.venue.address.city}} {{eventInfo.venue.address.country}}</span>
          </div>
      </div>
  `,
  styles: [`
      .thumbnail {
          min-height: 210px
      }

      .well div {
          /*color: #555*/
      }

      .pad-left {
          margin-left: 10px;
      }
  `
  ]
})

export class EventThumbnailComponent {

  @Input() eventInfo: any
}

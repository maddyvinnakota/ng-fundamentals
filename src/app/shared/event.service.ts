import {Injectable} from "@angular/core";

@Injectable()
export class EventService {
  getEventInfo(id: number) {
    return this.EVENTS.find((e) => e.id === id);
  }

  getAllEvents() {
    return this.EVENTS;

  }


  EVENTS = [
    {
      id: 1,
      name: "Angular conference",
      date: "2023-07-21",
      venue: {
        name: "The oval",
        address: {
          street: "Main street 21",
          city: "London",
          country: "UK"
        }
      }
    },
    {
      id: 2,
      name: "React conference",
      date: "2023-07-21",
      venue: {
        name: "The oval",
        address: {
          street: "Main street 21",
          city: "London",
          country: "UK"
        }
      }
    },
    {
      id: 3,
      name: "React conference",
      date: "2023-07-21",
      venue: {
        name: "The oval",
        address: {
          street: "Main street 21",
          city: "London",
          country: "UK"
        }
      }
    },
    {
      id: 4,
      name: "React conference",
      date: "2023-07-21",
      venue: {
        name: "The oval",
        address: {
          street: "Main street 21",
          city: "London",
          country: "UK"
        }
      }
    },
    {
      id: 5,
      name: "React conference",
      date: "2023-07-21",
      venue: {
        name: "The oval",
        address: {
          street: "Main street 21",
          city: "London",
          country: "UK"
        }
      }
    }
  ];
}

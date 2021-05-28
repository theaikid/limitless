import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventData: any = '';
  eventDate: any = '';

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getCurrentEvent().toPromise().then(data => {
      this.eventData = data;
      this.eventDate = new Date(this.eventData.datetime).toLocaleString();

    }, err => {
      console.log(err);
    })
  }

}

import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventDashboard = [
  {
    id: 1,
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventDashboard,
      isOpen: false,

      selectedEvent: null
    };
  }

  handleFormOpen = () =>
    this.setState({
      isOpen: !this.state.isOpen,
      selectedEvent: {
        title: "",
        date: "",
        city: "",
        venue: "",
        hostedBy: ""
      }
    });

  handleCreateEvent = newEvent => {
    newEvent.id = +new Date();
    newEvent.PhotoURL = `/assets/user.png`;
    const updatedEvent = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvent,
      isOpen: false
    });
  };

  handleUpdateEvent = UpdatedEvent => {
    const newEvents = this.state.events.map(event => {
      if (event.id === UpdatedEvent.id) {
        return { ...UpdatedEvent };
      } else {
        return event;
      }
    });
    this.setState({ events: newEvents, isOpen: false, selectedEvent: null });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({ selectedEvent: eventToOpen, isOpen: true });
  };

  handleDeleteEvent = eventId => () => {
    const updatedEvents = this.state.events.filter(
      event => event.id !== eventId
    );
    this.setState({ events: updatedEvents });
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            onEventOpen={this.handleOpenEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create Form"
            onClick={this.handleFormOpen}
          />
          {isOpen && (
            <EventForm
              handleCancel={this.handleFormOpen}
              createEvent={this.handleCreateEvent}
              selectedEvent={selectedEvent}
              updateEvent={this.handleUpdateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;

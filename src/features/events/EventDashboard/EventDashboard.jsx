import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { connect } from 'react-redux'
import { createEvent, updateEvent, deleteEvent } from '../eventActions'

class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
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
    // const updatedEvent = [...this.state.events, newEvent];

    this.props.handleCreateEvent(newEvent)

    this.setState({
      // events: updatedEvent,
      isOpen: false
    });
  };

  handleUpdateEvent = UpdatedEvent => {

    this.props.handleUpdateEvent(UpdatedEvent)
    // const newEvents = this.state.events.map(event => {
    //   if (event.id === UpdatedEvent.id) {
    //     return { ...UpdatedEvent };
    //   } else {
    //     return event;
    //   }
    // });
    this.setState({ isOpen: false, selectedEvent: null });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({ selectedEvent: eventToOpen, isOpen: true });
  };

  handleDeleteEvent = eventId => () => {
    this.props.handleDeleteEvent(eventId)
    // const updatedEvents = this.state.events.filter(
    //   event => event.id !== eventId
    // );
    // this.setState({ events: updatedEvents });
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props
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

const select = (store) => ({
  events: store.events
})

const actions = {
  handleCreateEvent: createEvent, handleUpdateEvent: updateEvent, handleDeleteEvent: deleteEvent
}

export default connect(select, actions)(EventDashboard);

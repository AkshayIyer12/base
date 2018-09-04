import React, { Component } from "react";
import EventListItem from "./EventListItem";
import PropTypes from "prop-types";
import urlPropType from "url-prop-type";

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>EventList</h1>
        {events && events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;

// date: PropTypes.instanceOf(Date).isRequired,

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
      hostedBy: PropTypes.string.isRequired,
      hostPhotoURL: urlPropType.isRequired,
      attendees: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          photoURL: urlPropType.isRequired
        })
      )
    })
  )
};

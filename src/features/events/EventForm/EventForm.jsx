import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    event: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    },
    internalUpdate: false
  };

  componentDidMount() {
    if (this.state.event !== this.props.selectedEvent) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedEvent !== prevProps.selectedEvent) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  handleChange = field => _event => {
    const event = { ...this.state.event };
    event[field] = _event.target.value;
    this.setState({ event, internalUpdate: true });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const { event } = this.state;
    const { updateEvent, createEvent } = this.props;
    if (event.id) {
      updateEvent(event);
    } else {
      createEvent(this.state.event);
    }
  };

  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              value={event.title}
              placeholder="First Name"
              onChange={this.handleChange("title")}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              placeholder="Event Date"
              onChange={this.handleChange("date")}
              value={event.date}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City event is taking place"
              onChange={this.handleChange("city")}
              value={event.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder="Enter the Venue of the event"
              onChange={this.handleChange("venue")}
              value={event.venue}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder="Enter the name of person hosting"
              onChange={this.handleChange("hostedBy")}
              value={event.hostedBy}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;

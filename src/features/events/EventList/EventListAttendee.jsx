import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class ListItem extends Component {
  render() {
    let { attendee } = this.props;
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={attendee.photoURL} />
      </List.Item>
    );
  }
}

export default ListItem;

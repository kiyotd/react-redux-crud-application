import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { readEvents } from "../actions";

class EventsIndex extends React.Component {

  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    const events = this.props.events;

    return (
      <>
        <table>
          <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          </thead>
          <tbody>
          {
            _.map(events, (event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <Link to="/events/new">New Events</Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    readEvents: () => dispatch(readEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

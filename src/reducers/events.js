import _ from "lodash";
import { READ_EVENTS } from "../actions";

const initialState = {};

export default (stateEvents = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    default:
      return stateEvents;
  }
}

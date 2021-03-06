import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1/";
const QUERY_STRING = "?token=token123";

/**
 * イベントデータを全件取得 (Action Creator)
 */
export const readEvents = () => {
  return async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`);
    dispatch({ type: READ_EVENTS, response: response });
  };
};

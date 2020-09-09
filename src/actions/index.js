export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

/**
 * インクリメント (Action Creator)
 * @returns {{type: string}} Actionを返す
 */
export const increment = () => {
  // Action
  return {
    type: INCREMENT
  };
};

/**
 * デクリメント (Action Creator)
 * @returns {{type: string}} Actionを返す
 */
export const decrement = () => {
  // Action
  return {
    type: DECREMENT
  };
};

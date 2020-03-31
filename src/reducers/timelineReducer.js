import * as types from '../actions/actionTypes';

export default function timelineReducer(state=[], action) {
  switch (action.type) {
    case types.LOADED_TIMELINE_EVENTS:
      return action.timelineEvents;
    case types.ADDED_TIMELINE_EVENT:
      return [
        ...state,
        Object.assign({}, action.timelineEvent)
      ];
    case types.DELETED_TIMELINE_EVENT:
      return state.filter(te => te.id !== action.id);
    default:
      return state;
  }
}
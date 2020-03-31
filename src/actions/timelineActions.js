import * as types from './actionTypes';
import TimelineApi from '../api/timelineApi';

export function loadedTimelineEvents(events) {
  return { type: types.LOADED_TIMELINE_EVENTS, events};
}

export function addedTimelineEvent(event) {
  return { type: types.ADDED_TIMELINE_EVENT, event};
}

export function deletedTimelineEvent(id) {
  return { type: types.DELETED_TIMELINE_EVENT, id};
}

export function loadTimelineEvents() {
  return dispatch => {
    return TimelineApi.getAllEvents().then(events => {
      dispatch(loadedTimelineEvents(events));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addTimelineEvent(event) {
  return dispatch => {
    return TimelineApi.saveEvent(event).then(event =>
      dispatch(addedTimelineEvent(event))
    ).catch(error => {
      throw error;
    });
  };
}

export function deleteTimelineEvent(id) {
  return dispatch => {
    return TimelineApi.deleteEvent(id).then(() =>
      dispatch(deletedTimelineEvent(id))
    ).catch(error => {
      throw error;
    });
  };
}
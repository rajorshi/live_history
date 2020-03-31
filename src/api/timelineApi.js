import axios from 'axios';

export default class TimelineApi {
	static getAllEvents() {
		return axios.get('/api/timeline/events')
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}

	static saveEvent(event) {
		return axios.post('/api/timeline/events', event)
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}

	static deleteEvent(id) {
		return axios.delete('/api/timeline/events/' + id)
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}
}
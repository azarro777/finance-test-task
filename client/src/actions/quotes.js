import { API_URL } from '../config';
import { disconnectSocket } from '../reducer/filteredQuotesReducer';
import io from 'socket.io-client';
import { getFilteredData } from '../reducer/filteredQuotesReducer';
const socket = io(API_URL);

export const fetchFilteredData = (interval) => {
	return dispatch => {
		try {
			const defaultInterval = interval === 0 ? interval = 5000 : interval;
			if(socket.connected === false) {
				socket.connect();
				socket.emit('start', defaultInterval);
				socket.on('ticker', function(response) {
				dispatch(getFilteredData(response));
			});
			};
		} catch (error) {
			console.log(error);
		}
	}
};

export const removeConnection = () => {
	return dispatch => {
		try {
			socket.disconnect();
			dispatch(disconnectSocket());
		} catch (error) {
			console.log(error);
		}
	}
}
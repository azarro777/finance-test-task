const GET_DATA = "GET_DATA";
const ADD_SELECT_ITEMS = "ADD_SELECT_ITEMS";
const DISCONNECT_SOCKET = "DISCONNECT_SOCKET";

const defaultState = {
	filteredQuotes: [],
	previousFilteredQuotes: [],
	selectItems: [],
}

export default function filteredQuotesReducer(state = defaultState, action) {
	switch (action.type) {
		case GET_DATA: 
			return {
				...state, 
				previousFilteredQuotes: [...state.filteredQuotes.filter(item => state.selectItems.includes(item.ticker))], 
				filteredQuotes: [...action.payload.filter(item => state.selectItems.includes(item.ticker))]};
		case ADD_SELECT_ITEMS: return {...state, selectItems: [...action.payload]};
		case DISCONNECT_SOCKET: return {...state, filteredQuotes: [], previousFilteredQuotes: [], selectItems: []};
		default: return state;
	}
};

export const getFilteredData = (data) => ({type: GET_DATA, payload: data});
export const addToSelectArray = (item) => ({type: ADD_SELECT_ITEMS, payload: item});
export const disconnectSocket = () => ({type: DISCONNECT_SOCKET});
import {configureStore} from "@reduxjs/toolkit";
import filteredQuotesReducer from "./filteredQuotesReducer";

export const store = configureStore({
	reducer: {
		filteredQuotes: filteredQuotesReducer
	}
})
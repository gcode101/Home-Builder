import {
	FETCHING_PHOTOS,
	PHOTOS_FETCHED,
	ERROR_FETCHING_PHOTOS
} from '../actions';

const initialState = {
	photos: [],
	fetchingPhotos: false,
	error: null
}

export default (state=initialState, action) => {
	switch(action.type) {
		case FETCHING_PHOTOS:
			return {
				...state, fetchingPhotos: true
			};
		case PHOTOS_FETCHED:
			return {
				...state,
				fetchingPhotos: false,
				notes: action.payload
			};
		case ERROR_FETCHING_PHOTOS:
			return {
				...state,
				fetchingPhotos: false,
				error: action.payload
			};
		default:
			return state;
	}
}


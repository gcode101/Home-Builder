import axios from 'axios';

export const FETCHING_PHOTOS = 'FETCHING_PHOTOS';
export const PHOTOS_FETCHED = 'PHOTOS_FETCHED';
export const ERROR_FETCHING_PHOTOS = 'ERROR_FETCHING_PHOTOS';

const url = 'http://localhost:3000';

export const getPhotos = () => {
	const photos = axios.get(`${url}/api/photos/get`);
	return dispatch => {
		dispatch({ type: FETCHING_PHOTOS });
		photos
			.then(({ data }) => {
				dispatch({ type: PHOTOS_FETCHED, payload: data });
			})
			.catch((err) => {
				dispatch({ type: ERROR_FETCHING_PHOTOS, payload: err });
			});
	}
}

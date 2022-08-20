const cardsDataRequested = () => ({type: 'FETCH_CARDS_DATA_REQUEST'});

const cardsDataLoaded = (payload) => ({
		type: 'FETCH_CARDS_DATA_SUCCESS',
		payload
});

const cardsDataError = (payload) => ({
	type: 'FETCH_CARDS_DATA_FAILURE',
	payload
});

const fetchCardsData = (methodService, dispatch) => () => {
	dispatch(cardsDataRequested());
	methodService()
		.then(data => dispatch(cardsDataLoaded(data)))
		.catch(error => dispatch(cardsDataError(error)));
};

const deleteItem = (payload) => ({
	type: 'DELETE_ITEM',
	payload
});

const likeItem = (payload) => ({
	type: 'LIKE_ITEM',
	payload
});

const toggleFilterLikes = (payload) => ({
	type: 'TOGGLE_FILTER_LIKES',
	payload
});

export {
	fetchCardsData,
	deleteItem,
	likeItem,
	toggleFilterLikes
};
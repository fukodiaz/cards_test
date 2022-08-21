const initialState = {
	dataCards: null,
	dataCardsLoading: false,
	dataCardsError: false,
	visibleCards: null,
	cardsLiked: null,
	flagLikes: false
};

const deleteItem = (id, items) => {
	return items.filter(item => item.id !== id);
};

const likeItem = (idx, items) => {
	const item = items.find(({id}) => id === idx);
	const itemIndex = items.findIndex(({id}) => id === idx);
	const newItem = {...item, isLiked: !item.isLiked};
	return [...items.slice(0, itemIndex), newItem, ...items.slice(itemIndex+1)];
};

const defineLikedCards = (items) => {
	return items.filter(({isLiked}) => isLiked === true);
};

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case 'FETCH_CARDS_DATA_REQUEST':
			return {
				...state,
				dataCards: null,
				visibleCards: null,
				dataCardsLoading: true,
				dataCardsError: false
			}

		case 'FETCH_CARDS_DATA_SUCCESS':
			return {
				...state,
				dataCards: action.payload,
				visibleCards: action.payload,
				dataCardsLoading: false,
				dataCardsError: false
			}

		case 'FETCH_CARDS_DATA_FAILURE':
			return {
				...state,
				dataCards: null,
				visibleCards: null,
				dataCardsLoading: false,
				dataCardsError: action.payload
			}

		case 'DELETE_ITEM':
			const visCards = deleteItem(action.payload, state.visibleCards);
			return {
				...state,
				visibleCards: visCards,
				cardsLiked: defineLikedCards(visCards)

			}

		case 'LIKE_ITEM':
			const visibleCards = likeItem(action.payload, state.visibleCards);
			return {
				...state,
				visibleCards,
				cardsLiked: defineLikedCards(visibleCards)
			}

		case 'TOGGLE_FILTER_LIKES':
			return {
				...state,
				flagLikes: action.payload
			}

		default: 
			return state;
	}
};

export default reducer;
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {compose, withCardsService} from '../hoc';
import {fetchCardsData, deleteItem, likeItem} from '../../actions';

import CardItem from '../card-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import styles from './cards-list.m.less';

class CardsList extends Component {

	componentDidMount() {
		this.props.fetchCardsData();
	}

	createCard = (card) => {
		const {id, url, isLiked} = card;
		const {deleteItem, likeItem} = this.props;

		return (
			<li key={id} className={styles.itemCard}>
				<CardItem url={url} deleteItem={() => deleteItem(id)} 
								likeItem={() => likeItem(id)}
								isLiked={isLiked} />
			</li>
		);
	}

	render() {
		const {cards, loading, error, flagLikes, cardsLiked} = this.props;
		let contentCards;

		if (cards && !flagLikes) {
			contentCards = cards.map(this.createCard);
		} else if (cardsLiked && flagLikes) {
			contentCards = cardsLiked.map(this.createCard);
		} else {
			contentCards = null;
		}

		if (loading) { 
			return( 
				<div className={styles.boxAdditional}>
					<Spinner />
				</div> 
			)} 
		
		if (error) { return <ErrorIndicator /> }

		return (
			<ul className={styles.listCards}>
				{contentCards}
			</ul>
		);
	}
}

const mapMethodsToProps = (cardsService) => ({
	getAllItems: cardsService.getAllItems
});

const mapStateToProps = ({visibleCards, dataCardsLoading, dataCardsError,
									flagLikes, cardsLiked}) => ({
	cards: visibleCards, 
	loading: dataCardsLoading, 
	error: dataCardsError,
	flagLikes,
	cardsLiked
});

const mapDispatchToProps = (dispatch, {getAllItems}) => ({
	fetchCardsData: () => fetchCardsData(getAllItems, dispatch)(),
	deleteItem: (id) => dispatch(deleteItem(id)),
	likeItem: (id) => dispatch(likeItem(id))
});

export default compose(
	withCardsService(mapMethodsToProps),
	connect(mapStateToProps, mapDispatchToProps)
)(CardsList);
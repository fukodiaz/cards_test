import React from 'react';
import { CardsServiceConsumer } from '../cards-service-context';

const withCardsService = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		return (
			<CardsServiceConsumer>
				{
					(cardsService) => {
						const propsFromService = mapMethodsToProps(cardsService);
						return (<Wrapped {...props} {...propsFromService} />);
					}
				}
			</CardsServiceConsumer>
		);
	};
};

export default withCardsService;
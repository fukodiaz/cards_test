import React from 'react';

const {
	Provider: CardsServiceProvider,
	Consumer: CardsServiceConsumer
} = React.createContext();

export {
	CardsServiceConsumer,
	CardsServiceProvider
};
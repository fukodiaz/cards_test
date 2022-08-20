import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ErrorBoundry from './components/error-boundry';
import {CardsServiceProvider} from './components/cards-service-context';
import App from './components/app';

import store from './store';
import CardsService from './services/cards-service';

const cardsService = new CardsService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<CardsServiceProvider value={cardsService}>
				<App />
			</CardsServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root'));
import React from 'react';

import FilterLikes from '../filter-likes';
import CardsList from '../cards-list';
import styles from './app.m.less';

const App = () => {
	return (
		<div className={styles.mainWrapper}>
			<FilterLikes />
			<CardsList />
		</div>
	);
};

export default App;

import React from 'react';
import {connect} from 'react-redux';
import {toggleFilterLikes} from '../../actions';

import styles from './filter-likes.m.less';

const FilterLikes = ({toggleFilterLikes}) => {
	const handleEvent = (event) => {
		if (event.type === "mousedown") {
			toggleFilterLikes(true);
		} else if (event.type === "mouseup") {
			toggleFilterLikes(false);
		}
	}

	return (
		<div className={styles.boxFilter}>
			<button className={styles.btnFilter}
				onMouseDown={handleEvent} 
				onMouseUp={handleEvent}>
				Show liked cards!
			</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleFilterLikes: (flag) => dispatch(toggleFilterLikes(flag))
});

export default connect(undefined, mapDispatchToProps)(FilterLikes);
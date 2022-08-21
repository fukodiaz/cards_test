import React from 'react';

import styles from './card-item.m.less';
import like from './like_2.svg';
import trash from './trash.svg';

const CardItem = ({url, name, deleteItem, likeItem, isLiked}) => {
	const classBoxLike = isLiked ? 'activeSvgBox' : 'svgBox';

	return (
		<div className={styles.boxCard}>
			<img src={url} alt="card photo"
					className={styles.cardImage} />
			<div className={styles.containerLower}>
				<p className={styles.itemName}>
					{name}
				</p>
				<div className={styles.boxBtns}>
					<button className={styles.buttonLike} type="button"
								onClick={likeItem}>
						<p className={styles[classBoxLike]} >
							<svg width="34" height="30">
								<use href={`${like}#like`}></use>
							</svg>
						</p>
					</button>
					<button type="button" className={styles.buttonDelete}
							onClick={deleteItem}>
						<p className={styles.svgBoxDelete}>
							<svg width="100%" height="100%">	
								<use href={`${trash}#trash`}></use>
							</svg>
						</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
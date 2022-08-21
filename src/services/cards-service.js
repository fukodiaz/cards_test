export default class CardsService {
	_apiBase = 'https://zoo-animal-api.herokuapp.com/animals';

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		
		if (!res.ok) {
			throw new Error (
				`Couldn't fetch ${this._apiBase}${url}, received ${res.status}`); 
		}

		return res.json();
	}

	getAllItems = async () => {
		const res = await this.getResource('/rand/10'); 
		return res.map(this._transformItem);
	};

	_transformItem = (item) => {
		return {
			id: item.id,
			url: item.image_link,
			name: item.latin_name,
			isLiked: false
		};
	};
}
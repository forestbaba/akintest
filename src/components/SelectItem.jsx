import React, { useState, useEffect } from 'react';
import Icon1 from '../assets/images/facebook.png';
const SelectItem = ({ name, res }) => {
	const [ current, setCurrent ] = useState({});
	useEffect(() => {
		setCurrent(res[0]);
	}, []);

	const handleSelect = (e) => {
		setCurrent(e.target.value.image);
		setCurrent(e.target.value.name);
		res.map((item) => {
			console.log(e.target.value);
			if (item.mal_id === parseInt(e.target.value)) {
				console.log(item);
				setCurrent(item);
			}
		});
	};
	return (
		<div className="image-arrow-child">
			{name ? (
				<p className="name">
					{name && typeof current === "object" &&  Object.keys(current).length > 0 ? (
						current.name.slice(0, 2).toUpperCase()
					) : (
						name.slice(0, 2).toUpperCase()
					)}
				</p>
			) : (
				<img src={typeof current === 'object' && current.image_url ? current.image_url : Icon1} />
			)}
			<select onChange={handleSelect}>
				{res &&
					res.map((item, index) => {
						return (
							<option value={item.mal_id} id={item.mal_id}>
								{item.name}
							</option>
						);
					})}
			</select>
		</div>
	);
};
export default SelectItem;

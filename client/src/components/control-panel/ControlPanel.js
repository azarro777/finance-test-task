import { useDispatch } from 'react-redux';
import { fetchFilteredData, removeConnection } from '../../actions/quotes';
import Select from 'react-select';
import { colourOptions } from '../../utils/colourOptions';
import './ControlPanel.css';
import { useEffect, useState } from 'react';
import { toSeconds } from '../../utils/toSeconds';
import { addToSelectArray } from '../../reducer/filteredQuotesReducer';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const [interval, setInterval] = useState('');

	useEffect(() => {
		dispatch(fetchFilteredData(toSeconds(+interval)));
	}, [interval]);

	const offHandler = () => {
		dispatch(removeConnection());
		setInterval('');
	};

	const handleChange = (event) => {
		const items = event.map(el => el.value);
		dispatch(addToSelectArray(items));
	}

	const intervalHandler = (event) => {
		setInterval(event.target.value);
		setTimeout((value)=> {
			setInterval(value);
		}, 1000, event.target.value);
	};

	return (
		<div className="control">
			<div className="container">
			<div className="control__header">Control panel</div>
				<div className="control__switch-group">
					<Select
						isMulti
						onChange={(event) => handleChange(event)}
						name="colors"
						options={colourOptions} 
						className="basic-multi-select"
					/>
					<input 
						value={interval}
						onChange={(event) => intervalHandler(event)}
						type="text" 
						placeholder="input delay"
						className="control__input"
					/>
					<button onClick={() => offHandler()} className="control-button__on">Stop connection</button>
				</div>
			</div>
		</div>
);
};
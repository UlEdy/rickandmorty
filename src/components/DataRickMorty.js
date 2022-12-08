import { useEffect, useState } from 'react';

import Card from './Card';

const DataRickMorty = () => {
	const [characters, setCharacters] = useState([]);
	const [status, setStatus] = useState('unknown');

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then((response) => response.json())
			.then((data) => setCharacters(data.results))
			.catch((error) => console.log(`Error ${error}`));
	}, []);

	let sortedResults = characters.filter(
		(character) => character.status === status
	);

	const charactersData = sortedResults.map(({ id, name, status, image }) => {
		return <Card key={`rm-${id}`} name={name} status={status} pic={image} />;
	});

	const handleChangeStatus = (event) => {
		setStatus(event.target.value);
	};

	return (
		<div>
			<select
				name='dead or alive status'
				value={status}
				onChange={handleChangeStatus}
				required>
				<option value={'Alive'}>ALIVE</option>
				<option value={'Dead'}>DEAD</option>
				<option value={'unknown'}>UNKNOWN</option>
			</select>
			{charactersData}
		</div>
	);
};

export default DataRickMorty;

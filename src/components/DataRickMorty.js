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

	console.log(characters);

	return (
		<div>
			<select
				name='dead or alive status'
				value={status}
				onChange={(event) => setStatus(event.target.value)}
				required>
				<option value={'alive'}>ALIVE</option>
				<option value={'dead'}>DEAD</option>
				<option value={'unknown'}>UNKNOWN</option>
			</select>

			{characters.map(({ id, name, status, image }) => (
				<Card key={`rm-${id}`} name={name} status={status} pic={image} />
			))}
		</div>
	);
};

export default DataRickMorty;

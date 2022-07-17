const Card = ({ pic, name, status }) => (
	<div>
		<img src={pic} alt='character from Rick and Morty' />
		<div>Name: {name}</div>
		<div>Status: {status}</div>
	</div>
);

export default Card;

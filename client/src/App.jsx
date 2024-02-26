import { useEffect } from 'react';
import { socket } from './sockets/socket';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	console.log(socket);
	useEffect(() => {
		socket.on('response', data => {
			console.log(data);
		});
	}, []);
	return (
		<>
			<GlobalStyles />
			<h1>REACT OK</h1>
			<form onSubmit={event => handleSubmit(event, socket)}>
				<input type='text' name='name' />
				<button>Send</button>
			</form>
		</>
	);
};

const handleSubmit = (event, socket) => {
	event.preventDefault();
	const name = event.target.name.value;
	socket.emit('message', name);
	event.target.reset();
};

export default App;

import { useNavigate } from 'react-router-dom';
import { socket } from '../../sockets/socket';

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>LOGIN</h1>
			<form onSubmit={event => handleAutenticate(event, navigate)}>
				<label htmlFor='username'>Username</label>
				<input type='text' name='username' />
				<button>ENTER CHAT</button>
			</form>
		</>
	);
};

const handleAutenticate = (event, navigate) => {
	event.preventDefault();
	const username = event.target.username.value;
	socket.emit('authenticate', username);
	navigate('/chat');
};

const handleSubmit = (event, socket) => {
	event.preventDefault();
	const name = event.target.name.value;
	socket.emit('message', name);
	event.target.reset();
};
export default Home;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../sockets/socket';
import Messages from '../messages/Messages';
import UsersList from '../users-list/UsersList';
import {
	StyledButton,
	StyledChat,
	StyledChatContainer,
	StyledForm,
	StyledInput
} from './styles';

const Chat = () => {
	const [users, setUsers] = useState([]);
	const [messages, setMessages] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		// Establecer los listeners
		socket.on('not username', () => handleNotUsername(navigate));
		socket.on('welcome', data => handleWelcome(data, messages, setMessages));
		socket.on('update users', data => handleUpdateUsers(data, setUsers));
		socket.on('new message', data => handleUpdateMessages(data, setMessages));

		// Limpiar los listeners al desmontar el componente o cambiar de ruta
		return () => {
			socket.off('not username', handleNotUsername);
			socket.off('welcome', handleWelcome);
			socket.off('update users', handleUpdateUsers);
			socket.off('new message', handleUpdateMessages);
		};
	}, []);

	return (
		<StyledChat>
			<UsersList users={users} />
			<StyledChatContainer>
				<Messages messages={messages} socketId={socket.id} />
				<StyledForm onSubmit={handleMessage}>
					<StyledInput type='text' name='message' />
					<StyledButton>Send</StyledButton>
				</StyledForm>
			</StyledChatContainer>
		</StyledChat>
	);
};

const handleMessage = event => {
	event.preventDefault();
	const message = event.target.message.value;
	socket.emit('send message', message);
	event.target.reset();
};

const handleUpdateMessages = (data, setMessages) => {
	setMessages(prevMessages => [...prevMessages, data]);
};

const handleNotUsername = navigate => {
	navigate('/');
};

const handleWelcome = (data, messages, setMessages) => {
	setMessages([...messages, data]);
};

const handleUpdateUsers = (usersUpdated, setUsers) => {
	setUsers(usersUpdated);
};

export default Chat;

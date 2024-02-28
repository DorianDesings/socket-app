import { useRef, useState } from 'react';
import Emotes from '../components/emotes/Emotes';
import { socket } from '../sockets/socket';
import { StyledButton, StyledForm, StyledInput } from './form.styles';

const Form = () => {
	const [showEmotes, setShowEmotes] = useState(false);
	const [message, setMessage] = useState('');
	const inputRef = useRef(null);
	return (
		<StyledForm
			onSubmit={event => handleMessage(event, setMessage, setShowEmotes)}
		>
			<StyledInput
				type='text'
				name='message'
				value={message}
				ref={inputRef}
				onInput={event => handleInputMessage(event.target.value, setMessage)}
			/>
			<img
				src='/smile.svg'
				alt=''
				width={20}
				onClick={() => setShowEmotes(!showEmotes)}
			/>
			<StyledButton>Send</StyledButton>
			{showEmotes && (
				<Emotes
					setEmote={emote => handleEmote(message, emote, setMessage, inputRef)}
				/>
			)}
		</StyledForm>
	);
};

const handleInputMessage = (value, setMessage) => {
	setMessage(value);
};

const handleEmote = (message, emote, setMessage, inputRef) => {
	setMessage(message + emote);
	inputRef.current.focus();
};

const handleMessage = (event, setMessage, setShowEmotes) => {
	event.preventDefault();
	const message = event.target.message.value;
	socket.emit('send message', message);
	setMessage('');
	setShowEmotes(false);
};

export default Form;

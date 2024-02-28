import { StyledMessageOther, StyledMessageOwn, StyledMessages } from './styles';

const Messages = ({ messages, socketId }) => {
	return (
		<StyledMessages>
			{messages.map(message => {
				const isMine = socketId === message.senderId;
				const autoMessage = !message.username;
				return (
					<div key={message.id}>
						{autoMessage && <span>{message.text}</span>}

						{!autoMessage && isMine && (
							<StyledMessageOwn>
								{message.username}: {message.text}
							</StyledMessageOwn>
						)}
						{!autoMessage && !isMine && (
							<StyledMessageOther $color={message.color}>
								{message.username}: {message.text}
							</StyledMessageOther>
						)}
					</div>
				);
			})}
		</StyledMessages>
	);
};

export default Messages;

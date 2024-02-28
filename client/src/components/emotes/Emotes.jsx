import { v4 } from 'uuid';
import { EMOTES } from '../../constants/emotes';
import { StyledEmote, StyledEmotesContainer } from './emotes.styles';

const Emotes = ({ setEmote }) => {
	return (
		<StyledEmotesContainer>
			{EMOTES.map(emote => (
				<StyledEmote key={v4()} onClick={() => setEmote(emote)}>
					{emote}
				</StyledEmote>
			))}
		</StyledEmotesContainer>
	);
};

export default Emotes;

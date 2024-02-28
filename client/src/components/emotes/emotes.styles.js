import styled from 'styled-components';

const StyledEmotesContainer = styled.div`
	position: absolute;
	bottom: 50px;
	right: 3rem;
	display: grid;
	grid-template-columns: repeat(10, 20px);
	gap: 0.5rem;
	height: 300px;
	width: fit-content;
	padding: 1rem;
	overflow: auto;
`;

const StyledEmote = styled.span`
	cursor: pointer;

	&:hover {
		transform: scale(1.7);
	}
`;

export { StyledEmote, StyledEmotesContainer };

import { styled } from 'styled-components';

const StyledChat = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-width: 375px;
	display: grid;
	grid-template-columns: 100px calc(100% - 100px);
	height: 100vh;

	@media screen and (width > 768px) {
		grid-template-columns: 200px calc(100% - 200px);
	}
`;

const StyledChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 100%;
	overflow: auto;
`;

export { StyledChat, StyledChatContainer };

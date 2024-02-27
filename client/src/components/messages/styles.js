import { styled } from 'styled-components';

const StyledMessages = styled.div`
	position: fixed;
	left: 90px;
	width: calc(100% - 90px);
	height: 100vh;
	padding: 1rem;
	overflow: scroll;
`;

const StyledMessageOwn = styled.p`
	padding: 1rem;
	border-radius: 0.5rem;
	width: 90%;
	margin-left: auto;
	background-color: #619c8e;
	overflow-wrap: break-word;
`;

const StyledMessageOther = styled.p`
	padding: 1rem;
	width: 90%;
	border-radius: 0.5rem;
	margin-right: auto;
	background-color: #a55f85;
	overflow-wrap: break-word;
`;

export { StyledMessageOther, StyledMessageOwn, StyledMessages };

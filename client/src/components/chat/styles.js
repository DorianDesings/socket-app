import { styled } from 'styled-components';

const StyledChatContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledChat = styled.div`
	display: grid;
	grid-template-columns: 100px 1fr;
	height: 100vh;
`;

const StyledForm = styled.form`
	position: fixed;
	left: 82px;
	bottom: 0;
	z-index: 10;
	display: flex;
	gap: 0.5rem;
	margin-top: auto;
	width: calc(100% - 82px);
	background-color: rgb(14, 20, 27);
`;

const StyledInput = styled.input`
	height: 2.5rem;
	padding-left: 1rem;
	background-color: inherit;
	color: aliceblue;
	border: 1px solid #7d8daa;
	border-left: none;
	border-radius: 0 0.5rem 0.5rem 0;
	outline: none;
	flex-grow: 1;
`;

const StyledButton = styled.button`
	position: relative;
	background-color: inherit;
	color: #7d8daa;
	border: 1px solid #7d8daa;
	height: 40px;
	border-radius: 0.5rem;
`;

export {
	StyledButton,
	StyledChat,
	StyledChatContainer,
	StyledForm,
	StyledInput
};

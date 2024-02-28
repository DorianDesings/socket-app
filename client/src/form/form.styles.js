import styled from 'styled-components';

const StyledForm = styled.form`
	position: fixed;
	right: 0;
	bottom: 0;
	z-index: 10;
	display: flex;
	gap: 0.5rem;
	width: calc(100% - 100px);
	margin-top: auto;
	background-color: rgb(14, 20, 27);

	@media screen and (width > 768px) {
		width: calc(100% - 200px);
	}
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

export { StyledButton, StyledForm, StyledInput };

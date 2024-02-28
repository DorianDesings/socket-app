import { styled } from 'styled-components';

const StyledMessages = styled.div`
	width: 100%;
	height: 100vh;
	padding: 1rem 0.5rem;

	@media screen and (width > 768px) {
		padding: 1rem 5rem;
	}

	@media screen and (width > 1200px) {
		padding: 1rem 10rem;
	}
`;

const StyledMessage = styled.p`
	padding: 1rem;
	border-radius: 0.5rem;
	overflow-wrap: break-word;
	width: fit-content;
	max-width: 90%;
`;

const StyledMessageOwn = styled(StyledMessage)`
	margin-left: auto;
	background-color: #619c8e;
`;

const StyledMessageOther = styled(StyledMessage)`
	margin-right: auto;
	background-color: ${({ $color }) => $color};
`;

export { StyledMessageOther, StyledMessageOwn, StyledMessages };

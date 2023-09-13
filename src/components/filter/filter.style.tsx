import styled from 'styled-components';

export const Filter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;

	> button {
		padding: 5px 10px;
		margin-right: 10px;
		cursor: pointer;
	}

	> button:last-child {
		margin-right: 0;
	}

	> button.active {
		background-color: rgba(30, 31, 32, 0.6);
		color: white;
		outline: 0;
	}
`;

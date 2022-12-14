import styled from "styled-components";

export const Root = styled.div`
	.input-container {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.input-container label {
		position: absolute;
		pointer-events: none;
		transform: translate(0, 23px) scale(1);
		transform-origin: top left;
		transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		color: #6f81a5;
		font-size: 16px;
		line-height: 1;
		left: 16px;
	}

	.input-container:focus-within label {
		transform: translate(0, 12px) scale(0.8);
		color: #0a53e4;
	}
`;

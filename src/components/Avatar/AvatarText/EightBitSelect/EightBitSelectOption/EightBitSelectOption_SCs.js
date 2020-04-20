import styled from 'styled-components';


const RadioInput = styled.input`
	margin-right: 20px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0 0 0 0);
	white-space: nowrap;
	border: 0;
	-webkit-clip-path: inset(50%);
	        clip-path: inset(50%);
	display: block;

	&:checked + span::before {
		display:inline-block;
		position: relative;
		top: -12px;
		left: -20px;
		content: "";
		width: 2px;
		height: 2px;
		box-shadow: 2px 2px,4px 2px,2px 4px,4px 4px,6px 4px,8px 4px,2px 6px,4px 6px,6px 6px,8px 6px,10px 6px,2px 8px,4px 8px,6px 8px,8px 8px,10px 8px,12px 8px,2px 10px,4px 10px,6px 10px,8px 10px,10px 10px,2px 12px,4px 12px,6px 12px,8px 12px,2px 14px,4px 14px;
	}	
`

export { RadioInput };


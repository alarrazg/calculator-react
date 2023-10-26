import React from 'react';
import '../stylesheets/ClearButton.css';

const ClearButton = (props) => (
	<div className='button-clear' onClick={props.handleClick}>
		{props.children}
	</div>
);

export default ClearButton;
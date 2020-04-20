import React from 'react';

import { RadioInput } from './EightBitSelectOption_SCs';

const eightBitSelectOption = (props) => {
	return (
  		<label>
	      <RadioInput type="radio" id={props.id} name="radio_option" onClick={() => this.checked} checked={props.is_checked} onChange={props.on_change}/>
	      <span>{props.children}</span>
	    </label>
	)
};

export default eightBitSelectOption;
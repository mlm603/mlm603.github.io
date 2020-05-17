import React, { Component } from 'react';

import { SpeechDiv } from './AvatarText_SCs';
import EightBitSelect from './EightBitSelect/EightBitSelect';

class AvatarText extends Component {
	animatedText = (fullText) => {
		let delay = 0;
	    let wordSpans = fullText
	    	.map((section, i) => { // loop through "sections" - new "section" starts with each new HTML tag
	    		let section_delay = delay;
	    		if (section.type === undefined){ // undefined section type means the section is text not nested in an HTML tag
		    		let words = section.split(' ')
		    			.map((word, j) => { // for each word in unnested text, add an animation delay so that it loads 0.2s after the previous word
		    				delay = section_delay + (j * 0.2);
		    				let delay_string = delay + "s";
			    			return (
			    				<span style={{"animationDelay": delay_string}}> {word} </span>
			    			);
		    			});
		    		return (words)
				} else if (section.type === "select_list"){ // if HTML tag is "select_list," this indicates that it contains select options
					delay += 2; // wait 2 seconds after the previous text loads before loading select options
					let delay_string = delay + "s";
					let option_strings = section.props.children;
					let options = option_strings.map((subsection, k) => { // return a hyperlinked string for each tag inside the parent select_list
						let option_string = subsection.props.children;
						let link = subsection.props.href;
						return (<a href={link} target="_"><label>{option_string}</label></a>);
					});
					let select_list_div = ( // nest the options inside an EightBitSelectDiv and apply the animation delay at the div level so all elements load at once
						<EightBitSelect animationDelay={delay_string}>
							{options}
						</EightBitSelect>
					);
					return (select_list_div);
				} else {
					return (section);
				}
	    	})
	    return wordSpans
	};

  	render() {
    	return (
    		<SpeechDiv width={this.props.width}>
				{this.animatedText(this.props.children)}
			</SpeechDiv>
  		)
  	}
};



export default AvatarText;
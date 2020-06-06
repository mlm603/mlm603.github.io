import React from 'react';

import { Icon_div, NPM_Icon_div } from './Icon_SCs';
import github_logo from '../../../assets/images/github_logo.png';
import linkedin_logo from '../../../assets/images/linkedin_logo.png';
import email_logo from '../../../assets/images/email_logo.png';
import npm_logo from '../../../assets/images/npm_logo.png';

const Icon = (props) => (
	<a href={props.url} target="_blank">
		<Icon_div img_path={props.img_path}/>
	</a>
);

const Github_Icon = (props) => (
	<a href="https://github.com/mlm603" target="_blank">
		<Icon_div img_path={github_logo}/>
	</a>
);

const LinkedIn_Icon = (props) => (
	<a href="https://www.linkedin.com/pub/meghan-maloy/63/164/9a1" target="_blank">
		<Icon_div img_path={linkedin_logo}/>
	</a>
);

const Email_Icon = (props) => (
	<a href="https://mail.google.com/mail?view=cm&tf=0&to=meghanmaloy@gmail.com" target="_blank">
		<Icon_div img_path={email_logo}/>
	</a>
);

const NPM_Icon = (props) => (
	
		<NPM_Icon_div>
			$ npm install -g mlm603
		</NPM_Icon_div>
);

export { Icon,  Github_Icon, LinkedIn_Icon, Email_Icon, NPM_Icon };
import React from 'react';
import { AvatarDiv, AvatarHead, AvatarEye, AvatarMouth, AvatarShirt, AvatarHands, AvatarPants, AvatarShoes } from './Avatar_SCs';

const avatar = (props) => (
	<AvatarDiv width={props.width} height={props.height}>
		<AvatarHead>
			<AvatarEye/>
			<AvatarMouth movements={props.mouth_movements}/>
		</AvatarHead>
		<AvatarShirt/>
		<AvatarHands/>
		<AvatarPants/>
		<AvatarShoes/>
	</AvatarDiv>
);

export default avatar;
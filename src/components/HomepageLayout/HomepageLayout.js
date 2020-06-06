import React from 'react';
// import { Jumbotron_div } from  './Jumbotron_SCs';
import Aux from '../../hoc/Aux';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Github_Icon, LinkedIn_Icon, Email_Icon, NPM_Icon } from '../UI/Icon/Icon';
import { SiteTitle, Icons_div, NPMcontact, BodyText, AboutMeImg, ContentContainer, ProjectTile_div } from './HomepageLayout_SCs';
import profile_img from '../../assets/images/profile.png';
import js_img from '../../assets/images/js_logo.png';
import d3_img from '../../assets/images/d3_logo.png';

const ProjectTile = (props) => {
	return (
		<ProjectTile_div youtube_link={props.youtube_link}>
		{
			props.youtube_link ?
			null
			: (
				<img_div>
					<img src={props.img_path}/>
				</img_div>
			)
		}
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		{
			props.youtube_link ?
			(
				<youtube_div> 
					<iframe src={props.youtube_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
				</youtube_div>
			)
			: null
		}
			<a href={props.link_to} target="_blank"/>
		</ProjectTile_div>
	);
};

const jumbotron = (props) => {
	return (
		<Aux>
			<Jumbotron>
				<link href="https://fonts.googleapis.com/css?family=Cabin Sketch" rel="stylesheet" type="text/css" />
				{props.children}
				<SiteTitle> Meghan Maloy </SiteTitle>
				<NPMcontact>
					$ npm install -g meghan_maloy
				</NPMcontact>
				<Icons_div>
					<Email_Icon/>
					<LinkedIn_Icon/>
					<Github_Icon/>
				</Icons_div>
			</Jumbotron>
			<Jumbotron section_title="About Me">
				<ContentContainer>
					<BodyText>
						CAT OWNER. DOUGHNUT ENTHUSIAST. OCCASIONAL PICNICKER.
						<br/><br/>
						... also a Senior Data Analyst at Datadog. I started my career pushing Excel to its limits with VBA, and have moved on to reporting in BI tools like Looker and Metabase (but Excel will always hold a special place in my heart). I've messed around with web development as a hobby for a few years and am particularly excited to continue practicing with D3. 
						<br/><br/>
						I love data! I love reading the cool data journalism that The Pudding and FiveThirtyEight publish. I love twisting data to support positions that are clearly incorrect. I love making assumptions and then finding out I'm wrong when I check the numbers. I love figuring out weird proxy metrics when a straightforward data source isn't available.
					</BodyText>
					<AboutMeImg src={profile_img}/>
				</ContentContainer>
			</Jumbotron>
			<Jumbotron section_title="Portfolio">
				<ContentContainer>
					<ProjectTile
						title="Looker JOIN 2019 Presentation"
						description="Promoting Data-Driven Product Design"
						youtube_link="https://www.youtube.com/embed/wG2rHtQ-xY8"
						css_grid_width="12"
					/>
					<ProjectTile
						img_path={js_img}
						title="FreeCodeCamp JS Projects"
						description="Javascript projects completed for FreeCodeCamp curriculum circa 2015"
						link_to="https://codepen.io/collection/XoEdeK"
					/>
					<ProjectTile
						img_path={d3_img}
						title="FreeCodeCamp D3 Projects"
						description="D3 projects completed for FreeCodeCamp curriculum circa 2018"
						link_to="https://codepen.io/collection/AKyweO"
					/>
					<ProjectTile
						img_path={js_img}
						title="Test Title"
						description="This is a test description"
						link_to="https://www.google.com"
					/>
					<ProjectTile
						img_path={js_img}
						title="Test Title"
						description="This is a test description"
						link_to="https://www.google.com"
					/>
				</ContentContainer>
			</Jumbotron>
		</Aux>
	);
};

export default jumbotron;
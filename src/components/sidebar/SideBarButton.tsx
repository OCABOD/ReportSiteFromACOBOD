import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

interface IProps {
	buttonText: string;
	path: string;
}

interface IState {

}

export default class SidebarButton extends React.Component<IProps, IState> {

	render() {
		return (
			<div className="sidebar-button">
				<Link to={this.props.path}>
					<div className="sidebar-button-text">
						{this.props.buttonText}
					</div>
				</Link>
			</div>
		)
	}
}
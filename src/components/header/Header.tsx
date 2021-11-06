import React from 'react';

import './header.scss';

interface IProps {

}

interface IState {

}

export default class Header extends React.Component<IProps, IState> {

	render() {

		return (<div className="header">
			<div>LOGO</div>
			<div>Buttons</div>
		</div>)
	}
}
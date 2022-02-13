import React from 'react';
import Card  from '../card/Card';

import './employee.scss';

interface IProps {
	
}

interface IState {

}

export default class EmployeeCard extends React.Component<IProps, IState> {

	render() {
		return (
			<div>
                <Card>
                    Name
                </Card>
			</div>
		)
	}
}
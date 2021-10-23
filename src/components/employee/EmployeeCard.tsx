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
			<Card>
                <div className = "EmployeeCard">
				<div>
                     image
					</div>
					<div>
                     Name and surname
					</div>
					<div>
                     specialisation
					</div>
					<div>
                     skype
					</div>
					<div>
                     email
					</div>
                </div>
			</Card>
		)
	}
}
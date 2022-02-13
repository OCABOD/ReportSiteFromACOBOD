import React from 'react';
import Card  from '../card/Card';
import profilephoto from '../../images/photo_2021-10-23_14-39-09.jpg'

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
                     <img src={profilephoto}/>
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
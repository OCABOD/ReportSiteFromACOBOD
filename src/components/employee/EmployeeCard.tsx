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
                     <img className='EmployeeCaedimage' src={profilephoto}/>
					</div>
					<div>
                     Vlad
					</div>
					<div>
                     developer
					</div>
					<div>
                     <a className='EmployeeCArdlink' href={`skype:${1}? call`}> Skype </a>
					</div>
					<div>
					<a className='EmployeeCArdlink' href={`mailto:${'test@gmail.com'}`}> Email </a>
					</div>
                </div>
			</Card>
		)
	}
}
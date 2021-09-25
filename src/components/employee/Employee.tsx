import React from 'react';
import { Link } from 'react-router-dom';

import './employee.scss';
import EmployeeCard from './EmployeeCard';

interface IProps {
	
}

interface IState {

}

export default class Employee extends React.Component<IProps, IState> {

	render() {
		return (
			<div className ="employee-content">
                {Array.from({length: 200}, (_, i) => i + 1).map(item =>(
                    <EmployeeCard></EmployeeCard>
                ))}
			</div>
		)
	}
}
import React from 'react';
import { Link } from 'react-router-dom';
import { AllUsers } from '../../axios/users';

import './employee.scss';
import EmployeeCard from './EmployeeCard';

interface IProps {
	
}

interface IState {
	employee: IUserInfo[];
}

export default class Employee extends React.Component<IProps, IState> {
    constructor(props:IProps ){
		super(props)
		this.state={
			employee:[]
		}
	}
	async componentDidMount(){
		this.setState({
			employee:await AllUsers()
		})
	}
	render() {
		return (
			<div className ="employee-content">
                {this.state.employee.map(item =>(
                    <EmployeeCard></EmployeeCard>
                ))}
			</div>
		)
	}

}
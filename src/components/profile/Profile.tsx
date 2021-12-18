import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Divider from '../divider/Divider';
import PopupImage from '../popup/PopupImage';
import { userInfo } from '../UserInformation/userInfo';
import InfoCard from './infoCard/InfoCard';

import './profile.scss';
interface IProps {
    image:any;
	
}

interface IState {
    isOpenPopup:boolean
    image:any;
}

export default class Profile extends React.Component<IProps, IState> {

    constructor(props:IProps){
        super(props);

        this.state = {
            isOpenPopup:false,
            image:this.props.image
        }
    }

    handleOpenPopup = () =>{
        this.setState({
            isOpenPopup:true
        })
    }

    handleClosePopup = () =>{
        this.setState({
            isOpenPopup:false
        })
    }

    handleSetImage = (image:any) =>{
        this.setState({
            image

        })
    }



	render() {
        const {image} = this.state;
		return (
			<div className ="profile-content">
                
                <figure className="avatar">
                    <img src={image} alt="Avatar" />
                    <button onClick={this.handleOpenPopup}>Choose Photo</button>
                </figure>

                <Card class="userInformation">
                            <InfoCard typeInfo="Name" mainInfo={userInfo.name}/>
                            <Divider/>
                            <InfoCard typeInfo="Surname" mainInfo={userInfo.surName}/>
                            <Divider/>
                            <InfoCard typeInfo="Age" mainInfo={userInfo.age.toString()}/>
                            <Divider/>
                            <InfoCard typeInfo="eMail" mainInfo={userInfo.eMail}/>
                            <Divider/>
                            <InfoCard typeInfo="Job" mainInfo={userInfo.job}/>
                </Card>
                {this.state.isOpenPopup && <PopupImage handleAddPhoto={this.handleSetImage} close={this.handleClosePopup}/>}
			</div>
		)
	}
}
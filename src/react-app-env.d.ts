/// <reference types="react-scripts" />

interface IJSWindow {
	google: any;
}

interface ISidebarButton {
	buttonText: string;
	path: string;
}

interface IUserInfo {
	name:string;
	surName:string;
	job:string;
	age:number;
	eMail:string;
	tags:ITag[];
}

interface ITag{
	tagName:string;
}

interface ILetter {
		topic: string,
		content: string,
		datesent: Date,
		senderID: number,
		recieverID: number,
	
}
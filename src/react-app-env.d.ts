/// <reference types="react-scripts" />

interface IJSWindow {
	google: any;
}

interface ISidebarButton {
	buttonText: string;
	path: string;
}
interface IBonusesButton {
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
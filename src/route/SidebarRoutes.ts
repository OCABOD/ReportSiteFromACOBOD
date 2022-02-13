import { EMAIL, EMPLOYEE, HOME } from "./Routes"

export const Routes: ISidebarButton[] = [
	{
		buttonText: 'Home',
		path: HOME
	},
	{
		buttonText: "Employee",
		path: EMPLOYEE
	},
	{
		buttonText: 'Email',
		path: EMAIL
	}
]
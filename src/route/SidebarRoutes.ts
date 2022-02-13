
import { BONUSES, EMPLOYEE, HOME,PROFILE } from "./Routes"


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
		buttonText: "Bonuses",
		path: BONUSES
	},
	{
		buttonText: "Profile",
		path: PROFILE
	}
]
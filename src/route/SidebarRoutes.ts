import { BONUSES, EMPLOYEE, HOME } from "./Routes"

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
	}
]
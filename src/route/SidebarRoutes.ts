import { ADMIN, EMPLOYEE, HOME, PROFILE } from "./Routes"

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
		buttonText: "Profile",
		path: PROFILE
	},
	{   buttonText: "Admin",
        path: ADMIN
	}
]
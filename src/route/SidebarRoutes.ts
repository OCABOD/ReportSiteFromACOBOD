import { getUser } from "../auth/auth"
import { EMPLOYEE, HOME, PROFILE } from "./Routes"

export const Routes: ISidebarButton[] = [
	{
		buttonText: 'Home',
		getPath: () => HOME
	},
	{
		buttonText: "Employee",
		getPath: () => EMPLOYEE
	},
	{
		buttonText: "Profile",
		getPath: (id?:number) => {
			if(!id)
				id=getUser().id
			return `${PROFILE}/${id}`
		}
	}
]
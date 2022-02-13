import { getUser } from "../auth/auth"
import { BONUSES,EMPLOYEE, HOME, PROFILE, ADMIN } from "./Routes"

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
		buttonText: "Bonuses",
		getPath: ()=> BONUSES
	},
	{
		buttonText: "Profile",
		getPath: (id?:number) => {
			if(!id)
				id=getUser().id
			return `${PROFILE}/${id}`
		}
	},
	{   
		buttonText: "Admin",
        getPath: () => ADMIN
	}
]
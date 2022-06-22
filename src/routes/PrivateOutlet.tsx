import { useAppSelector } from "redux/hooks";
import { Outlet, Navigate } from "react-router-dom";

interface PrivateOutletProps {
	roles?: string[];
}

export default function PrivateOutlet() {
	const user = useAppSelector((state) => state.auth.user);
	

 
	if (!user) {
		return <Navigate to="/" />;

	}

		

	return <Outlet />;
}

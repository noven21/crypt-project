import { UserAuth } from '../context/AuthContext';

export const useAuth = () => {
	const { user } = UserAuth();

	const activeTab = user?.email;

	return { activeTab };
};

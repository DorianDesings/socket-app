import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = () => {
	const { userData, loading } = useContext(AuthContext);

	if (loading) return <h1>Loading...</h1>;
	if (!userData) return <Navigate to='/' replace />;

	return <Outlet />;
};

export default ProtectedRoute;

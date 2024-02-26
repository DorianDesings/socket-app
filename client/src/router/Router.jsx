import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import ProtectedRoute from './ProtectedRoutes';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route element={<ProtectedRoute />}>{/* Ruta protegida */}</Route>
			</Route>
		</Routes>
	);
};

export default Router;

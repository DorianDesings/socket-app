import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Sidebar from '../components/sidebar/Sidebar';
import { StyledLayout } from './styles';

const Layout = () => {
	return (
		<StyledLayout>
			<Sidebar />
			<Main>
				<Header />
				<Outlet />
			</Main>
		</StyledLayout>
	);
};

export default Layout;

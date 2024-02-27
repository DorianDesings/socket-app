import { Route, Routes } from 'react-router-dom';
import Chat from '../components/chat/Chat';
import Home from '../components/home/Home';
const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/chat' element={<Chat />} />
		</Routes>
	);
};

export default Router;

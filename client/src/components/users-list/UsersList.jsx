import { StyledUsersList } from './styles';

const UsersList = ({ users }) => {
	return (
		<StyledUsersList>
			{users.map(user => (
				<div key={user.id}>
					<p>{user.username}</p>
				</div>
			))}
		</StyledUsersList>
	);
};

export default UsersList;

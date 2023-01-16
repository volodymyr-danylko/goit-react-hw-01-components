import FriendListItem from 'components/friend-list-item/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends &&
        friends.length > 0 &&
        friends.map(item => (
          <FriendListItem
            key={item.id}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

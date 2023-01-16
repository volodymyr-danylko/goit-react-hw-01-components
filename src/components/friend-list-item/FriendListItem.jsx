import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import classNames from 'classnames/bind';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span
        className={classNames(styles.status, isOnline && styles.online)}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

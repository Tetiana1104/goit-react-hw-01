import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import styles from '../FriendListItem/FriendListItem.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline} 
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
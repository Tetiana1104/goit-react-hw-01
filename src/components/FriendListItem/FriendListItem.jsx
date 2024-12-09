
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.card}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.onlineText : styles.offlineText}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;